import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";

const FeatureList = [
	{
		title: "Easy to Use",
		Svg: require("../../static/img/undraw_docusaurus_mountain.svg").default,
		description: (
			<>
				This blog was designed for faster reading without losing attention with
				easy access. You can easily submit blogs as well.
			</>
		),
	},
	{
		title: "Focus on What Matters",
		Svg: require("../../static/img/undraw_docusaurus_tree.svg").default,
		description: (
			<>
				This blog lets you know about your interests and give knowledge in that.
				Go ahead and explore into the <code>blog</code> section.
			</>
		),
	},
	{
		title: "Powered by SSIT",
		Svg: require("../../static/img/undraw_docusaurus_react.svg").default,
		description: (
			<>
				This project is backed by IEEE SSIT VIT which is one of the biggest
				techincal chapter in VIT.
			</>
		),
	},
];

function Feature({ Svg, title, description }) {
	return (
		<div className={clsx("col col--4")}>
			<div className='text--center'>
				<Svg className={styles.featureSvg} alt={title} />
			</div>
			<div className='text--center padding-horiz--md'>
				<h3>{title}</h3>
				<p>{description}</p>
			</div>
		</div>
	);
}

export default function HomepageFeatures() {
	return (
		<section className={styles.features}>
			<div className='container'>
				<div className='row'>
					{FeatureList.map((props, idx) => (
						<Feature key={idx} {...props} />
					))}
				</div>
			</div>
		</section>
	);
}
