import Head from 'next/head'
import DataProvider from "../context/DataContext"

// Data
import { homepage } from '../data/homepage'
import { social } from '../data/social'

// Components 
import { Navbar, Aside, Footer, Boxes, PopUp } from "../components"

// Styles
import style from '../styles/Homepage.module.scss'

export async function getStaticProps() {
	return {
		props: {
			homepage: homepage,
			social: social
		}
	}
}

export default function Home({ homepage, social }) {

	return (
		<>
			<Head>
				<title>Milagro de Catamarca | mdc1600</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<meta name="keywords" content="Analog/Digital Video experiments, Installations, Live VJ" />
				<meta name="description" content="Analog/Digital Video experiments. Installations. Live VJ" />
			</Head>

			<Navbar />

			<main className={style.grid}>
				<Aside />

				<div>
					<DataProvider>
						{homepage.data.attributes.ShowCase.map(item => (
							<Boxes props={item} key={item.id} />
						))}
						<PopUp />
					</DataProvider>
				</div>

				<Footer social={social} />
			</main>
		</>
	)
}
