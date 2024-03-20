'use client';
import Image from "next/image";
import styles from "./page.module.css";
import { createKey, getKeys } from "@near-js/biometric-ed25519";

export default function Home() {
  const initializeNear = async () => {
    try {
      const key = await createKey("test-fix")
      console.log("Created key: ", key)
      const derivedKey = await getKeys("test-fix")
      console.log("Got key", derivedKey)
    } catch (error) {
      console.error('Error initializing NEAR:', error);
    }
  };

  // const [walletConnection, setWalletConnection] = useState<nearAPI.WalletConnection>();
  // const [selector, setSelector] = useState<WalletSelector>();
  // const [isLoaded, setIsLoaded] = useState<boolean>(false);

  // useEffect(() => {
  //   (async () => {
  //     const result = await initializeNear();
  //     if (!result) return;
  //     console.log("NEAR INIT RESULT: ", result)
  //     const { walletConnection, selector } = result;
  //     setIsLoaded(true);
  //     setWalletConnection(walletConnection);
  //     setSelector(selector);
  //   })()
  // }, [])

  // const initializeNear = async () => {
  //   try {
  //     let keystore = new keyStores.BrowserLocalStorageKeyStore();
  //     const near = new Near({
  //         deps: {
  //           keyStore: keystore
  //         },
  //         keyStore: keystore,
  //         networkId: "testnet",
  //         nodeUrl: "https://rpc.testnet.near.org",
  //         helperUrl: "https://helper.testnet.near.org",
  //       });
    
  //     const walletConnection = new WalletConnection(
  //       near,
  //       "Nearjs react app"
  //     );
    
  //     let accountId: string = "";
  //     if (walletConnection.getAccountId()) {
  //       accountId = walletConnection.getAccountId()
  //     }
    
  //     const selector = await setupWalletSelector({ network: "testnet", modules: [
  //         setupMeteorWallet()
  //       ]
  //     })
      
  //     return { accountId, walletConnection, selector };
  //   } catch (error) {
  //     console.error('Error initializing NEAR:', error);
  //   }
  // };
  
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <div>
          <button onClick={initializeNear}>Create and Get Key</button>
        </div>        
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>src/app/page.tsx</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className={styles.grid}>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Docs <span>-&gt;</span>
          </h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Learn <span>-&gt;</span>
          </h2>
          <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Templates <span>-&gt;</span>
          </h2>
          <p>Explore starter templates for Next.js.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Deploy <span>-&gt;</span>
          </h2>
          <p>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  );
}
