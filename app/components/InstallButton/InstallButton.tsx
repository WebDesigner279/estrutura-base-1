// app/components/InstallButton/InstallButton.tsx

import React, { useState, useEffect } from "react";
import styles from "./InstallButton.module.scss"; // Importando o arquivo SCSS

export default function InstallButton() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showInstallButton, setShowInstallButton] = useState<boolean>(false);

  // Detecta o evento beforeinstallprompt
  useEffect(() => {
    const promptEventHandler = (event: any) => {
      event.preventDefault(); // Previne o prompt de instalação automático
      setDeferredPrompt(event); // Armazena o evento para uso posterior
      setShowInstallButton(true); // Exibe o botão de instalação
    };

    window.addEventListener("beforeinstallprompt", promptEventHandler);

    return () => {
      window.removeEventListener("beforeinstallprompt", promptEventHandler);
    };
  }, []);

  // Lida com o clique no botão de instalação
  const handleInstallClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt(); // Exibe o prompt de instalação
      const { outcome } = await deferredPrompt.userChoice; // Espera a escolha do usuário
      console.log(`User choice: ${outcome}`);
      setDeferredPrompt(null); // Limpa o evento após a escolha
      setShowInstallButton(false); // Esconde o botão após a instalação
    }
  };

  return (
    showInstallButton && (
      <button className={styles["install-button"]} onClick={handleInstallClick}>
        Instalar App
      </button>
    )
  );
}
