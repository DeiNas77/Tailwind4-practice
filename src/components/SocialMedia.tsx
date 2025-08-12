interface SocialMediaItem {
	id: string;
	arialTitle: string;
	href: string;
	title: string;
	linkXhref: string;
}

const socialMediaData: SocialMediaItem[] = [
	{
		id: "twitch",
		arialTitle: "Twitch",
		href: "https://www.twitch.com/",
		title: "Ir a Twitch",
		linkXhref: "src/assets/sprite.svg#twitch",
	},
	{
		id: "github",
		arialTitle: "Github",
		href: "https://www.github.com/",
		title: "Ir a GitHub",
		linkXhref: "src/assets/sprite.svg#github",
	},
	{
		id: "youtube",
		arialTitle: "Youtube",
		href: "https://www.youtube.com/",
		title: "Ir a YouTube",
		linkXhref: "src/assets/sprite.svg#youtube",
	},
	{
		id: "instagram",
		arialTitle: "Instagram",
		href: "https://www.instagram.com/",
		title: "Ir a Instagram",
		linkXhref: "src/assets/sprite.svg#instagram",
	},
	{
		id: "x",
		arialTitle: "X",
		href: "https://www.x.com/",
		title: "Ir a X",
		linkXhref: "src/assets/sprite.svg#x",
	},
	{
		id: "linkedin",
		arialTitle: "Linkedin",
		href: "https://www.Linkedin.com/",
		title: "Ir a LinkedIn",
		linkXhref: "src/assets/sprite.svg#linkedin",
	},
];

type SocialMediaId = (typeof socialMediaData)[number]["id"];

const colorsSocialMedia: Record<SocialMediaId, string> = {
	twitch: "bg-white",
	github: "bg-zinc-900",
	youtube: "bg-white",
	instagram: "bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]",
	linkedin: "bg-white",
	x: "bg-gray-900",
};

export const SocialMedia = () => {
	return (
		<section className="flex gap-4 justify-center pt-4">
			{socialMediaData.map((item) => (
				<a
					key={item.id}
					href={item.href}
					aria-label={item.arialTitle}
					title={item.title}
					target="_blank"
					className={`p-2 size-12 sm:size-16 flex justify-center items-center rounded-full hover:scale-110 transition-transform ${
						colorsSocialMedia[item.id]
					}`}>
					<svg width={28} height={28}>
						<use xlinkHref={item.linkXhref} />
					</svg>
				</a>
			))}
		</section>
	);
};
