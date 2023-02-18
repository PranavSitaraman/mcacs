import Head from "next/head";
export default function McaicRegister() {
    return (
        <div>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
                <title>MCAIC 2023 Registration</title>
                <script src="https://tally.so/widgets/embed.js" async></script>
                <style type="text/css">{" html { margin: 0, height: '100%', overflow: 'hidden' } iframe { position: 'absolute', top: 0, right: 0, bottom: 0, left: 0, border: 0 }"}
                </style>
            </Head>
            <body>
                <iframe data-tally-src="https://tally.so/r/3EqykB?transparentBackground=1" width="100%" height="100%" frameBorder="0" marginHeight="0" marginWidth="0" title="MCAIC 2023 Registration" />
            </body>
        </div>
    )
}