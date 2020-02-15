const styles = `
    body {
    margin: 0;
    padding: 0;
    }

    .main {
        margin-top: 50px;
        width: 50vw;
        margin-left: 25vw;
        height: 50vh;
        border: 2px solid black;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .follow {
        width: 25%;
        height: 25%;
        background: aqua;
    }
`;

const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);