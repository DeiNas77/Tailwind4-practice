interface CourseItem {
	id: string;
	name: string;
	href: string;
	classesLabel: string;
	iconId: string;
}

const courseData: CourseItem[] = [
	{
		id: "react",
		name: "React.js",
		href: "https://cursoreact.dev/",
		classesLabel: "Curso +14 clases",
		iconId: "react",
	},

	{
		id: "html",
		name: "HTML",
		href: "https://cursohtml.dev/",
		classesLabel: "Curso +8 clases",
		iconId: "html",
	},

	{
		id: "css",
		name: "CSS",
		href: "https://cursocss.dev/",
		classesLabel: "Curso +12 clases",
		iconId: "css",
	},
	{
		id: "typescript",
		name: "Typescript",
		href: "https://cursonode.dev/",
		classesLabel: "Curso +10 clases",
		iconId: "typescript",
	},
];

type CourseId = (typeof courseData)[number]["id"];

const courseStyles: Record<CourseId, { bg: string; colSpan: string }> = {
	react: {
		bg: "bg-gradient-to-br from-cyan-900 via-cyan-700 to-cyan-500 border-cyan-900",
		colSpan: "col-span-2",
	},

	html: {
		bg: "bg-gradient-to-br from-orange-900 via-orange-700 to-orange-500 border-orange-900",
		colSpan: "col-span-1",
	},
	css: {
		bg: "bg-gradient-to-br from-purple-900 via-purple-700 to-purple-500 border-purple-900",
		colSpan: "col-span-1",
	},
	typescript: {
		bg: "bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500 border-blue-900",
		colSpan: "col-span-2",
	},
};

export const Courses = () => {
	return (
		<div className="grid grid-cols-3 grid-rows-2 gap-2 w-full">
			{courseData.map((course) => {
				const styles = courseStyles[course.id];
				return (
					<a
						key={course.id}
						href={course.href}
						className={`relative rounded-3xl overflow-hidden ${styles.bg} ${styles.colSpan} flex flex-col items-start hover:contrast-125 transition text-white p-7 min-h-[180px] group`}>
						<span className="absolute bottom-4 left-6 font-bold text-3xl group-hover:-translate-y-1 transition z-100">
							{course.name}
						</span>

						<svg
							width={100}
							height={100}
							className="absolute -right-8 -bottom-4 -rotate-6 size-28 group-hover:rotate-12 group-hover:scale-150 transition-transform z-10">
							<use xlinkHref={`src/assets/sprite.svg#${course.iconId}`} />
						</svg>

						<span className="absolute top-2 left-4 border border-white px-2 rounded-xl py-0.5 z-100">
							{course.classesLabel}
						</span>
					</a>
				);
			})}
		</div>
	);
};
