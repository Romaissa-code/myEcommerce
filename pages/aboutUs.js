import styles from "../styles/about.module.css"; 

const aboutUs = () => {
    return (
      <>
        <header className={styles.head}>
          <h1> Who Are We ?</h1>
        </header>
        <main className={styles.container}>
          <div className={styles.content}>
            <div>
              <h3 className={styles.title}>About-Us</h3>
              <h5 className={styles.subTitle}>Lorem ipsum dolor sit amet</h5>
              <p className={styles.aboutContent}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Tempore maxime quaerat odit iure repellat, eos dolor? Hic quam
                cupiditate dolorum. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Autem, unde maxime. Deleniti recusandae
                nostrum amet dolorem nam porro nisi ipsa!
              </p>
              <button className="btn btn-outline-danger">
                Follow for more!
              </button>
            </div>
            <img src="./images/about.jpg" alt="aboutus" />
          </div>
        </main>
      </>
    );
}
 
export default aboutUs;