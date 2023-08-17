type TopProps = {
    children: React.ReactNode,
    className?: string
}

function Top({ children, className }:TopProps) {
    return ( 
        <section className={`flex justify-center w-screen -translate-y-[30%] sm:-translate-y-[50%] ${className}`}>
            {children}
        </section>
    );
}

export default Top;