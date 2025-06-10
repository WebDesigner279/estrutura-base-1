  import styles from './MenuHamburguer.module.scss'

  interface Props {
    isOpen: boolean;
    abrirMenu: () => void;
  }

  export default function MenuHamburguer( { isOpen, abrirMenu } : Props){

      return(
        <div className={styles.containerHamburguer}>
        <button
          className={`${styles.hamburguer} ${isOpen ? styles.open : ''}`}
          onClick={abrirMenu}
          aria-label="Abrir menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
      )
  }