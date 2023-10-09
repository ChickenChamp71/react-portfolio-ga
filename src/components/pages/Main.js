import React, { useEffect } from "react";
import Contact from "../Contact";
import Portfolio from "../Portfolio";
import { useInView } from "react-intersection-observer";

export default function Main({ handleFailState, handleSuccessState, notifState, checkVisibility }) {

    const { ref, inView } = useInView({
        threshold: 0,
        trackVisibility: true
    });

    useEffect(() => {
        checkVisibility(inView)
    }, [ref, inView, checkVisibility]);
    
    return (
        <main className="main-body">
            <section className="about-me" id="about-me">
                <h1>Gabriel Anderson</h1>
                <hr ref={ref} />
                <hr />
                <p className="about-me-p">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius fringilla lorem sed tempor. Sed vitae laoreet dui. Vestibulum aliquam hendrerit nibh ut pharetra. Duis accumsan mollis nisl, in porttitor mauris. Vivamus finibus venenatis est id facilisis. Pellentesque aliquet sapien non dictum lobortis. Nunc tempus ut nisl eu blandit. Pellentesque a odio vel mauris consectetur pellentesque vitae in odio.
                    <br />
                    Cras enim risus, molestie tempus enim non, dignissim lobortis eros. Donec ligula est, faucibus sed odio et, lacinia consectetur diam. Donec imperdiet nisi finibus, consequat quam eget, volutpat libero. Aliquam erat volutpat. Ut placerat felis a odio viverra, sed mattis nisl finibus. Mauris eu accumsan magna. Nulla facilisi.
                </p>
                
            </section>

            <hr />

            <Portfolio notifState={notifState} />

            <hr />
            
            <Contact handleSuccessState={handleSuccessState} handleFailState={handleFailState} notifState={notifState} />

        </main>
    )
}