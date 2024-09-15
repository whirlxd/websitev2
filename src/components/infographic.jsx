/* eslint-disable react/no-unescaped-entities */

import Bento from "./bento";

function infographic() {
	return (
		<div className="flex flex-col min-h-screen md:flex-row ">
			{/* Right half: Whirl */}
			<div className="flex items-center justify-center flex-1 p-4 bg-opacity bg-gradient-to-r from-transparent to-secondary md:p-0">
				<div className="text-container">
					<div className="relative flex items-center justify-center w-full h-40 ">
						<div className="special absolute text-[100px] font-bold tracking-wider text-slate-500 opacity-20">
							About
						</div>

						<div className="relative z-10 text-6xl font-bold tracking-wider">
							<span className="text-white special">Im</span>
							<span className="text-primary special">Whirl</span>
						</div>
					</div>
					<p className="text-center text-md md:text-lg text-slate-500">
						16 • he/him
					</p>
					<p className="mt-2 text-center text-balance text-secondary-content">
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto
						ipsum neque iste earum quidem modi, est molestias qui ad molestiae
						dolorum laudantium velit quas possimus perspiciatis. Quod ut a vero!
					</p>

					<p className="mt-4 text-center text-balance text-secondary-content">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore
						quod eum tenetur quam molestiae dolor laudantium, earum suscipit
						laborum aut aliquam. Dolore eos cumque beatae maxime quasi at ipsa
						itaque.
					</p>
					<p className="mt-4 text-center text-balance text-secondary-content">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
						deleniti facere qui cumque, animi fuga praesentium molestias nisi,
						beatae ducimus aliquam quae officia itaque culpa veniam possimus
						maxime ipsa adipisci.
					</p>
					<div className="flex items-center justify-center mt-6">
						<div className="grid items-center justify-center grid-cols-2 mx-auto text-center gap-x-16 gap-y-4 ">
							<p className="flex items-center font-mono font-extrabold">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									alt="location-icon"
									width="24"
									height="24"
									viewBox="0 -960 960 960"
									fill="currentColor"
								>
									<path
										d="M480-480q33 0 56.5-23.5T560-560t-23.5-56.5T480-640t-56.5 23.5T400-560t23.5 56.5T480-480m0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800t-170.5 69.5T240-552q0 71 59 162.5T480-186m0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880t223.5 89T800-552q0 100-79.5 217.5T480-80m0-480"
										className=" fill-slate-400"
									/>
								</svg>{" "}
								- Unknown
							</p>
							<p className="flex items-center font-mono font-extrabold">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 -960 960 960"
								>
									<path
										d="m196-120-6-51-8-4q-4-2-11-7l-48 20-44-76 41-31v-21l-41-32 44-76 48 20q5-3 9.5-6t9.5-5l6-51h88l6 51 4 2 4 2q2 1 5 3l6 4 48-20 44 76-41 31v22l219-127-45 79 12 9-158 92-31 54-48-20q-5 3-9.5 6t-9.5 5l-6 51zm44-220q-25 0-42.5 17.5T180-280t17.5 42.5T240-220t42.5-17.5T300-280t-17.5-42.5T240-340m156-220-6-51q-2-2-5-3t-5-3v220l-15-26-45 19v-204l-40-70 40-31v-21l-41-32 44-76 48 20q5-3 9.5-6t9.5-5l6-51h88l6 51 8 4q4 2 11 7l48-20 44 76-41 31v21l41 32-44 76-48-20q-5 3-9.5 6t-9.5 5l-6 51zm44-220q-25 0-42.5 17.5T380-720t17.5 42.5T440-660t42.5-17.5T500-720t-17.5-42.5T440-780m236 660-6-51-8-4q-4-2-11-7l-48 20-44-76 41-31v-21l-41-31 44-77 48 20q3-2 4-2.5l15-7.5-216-152h48l4-36 195 136h63l6 51 4 2 4 2q2 1 5 3l6 4 48-20 44 76-41 31v21l41 32-44 76-48-20q-5 3-9.5 6t-9.5 5l-6 51zm44-220q-25 0-42.5 17.5T660-280t17.5 42.5T720-220t42.5-17.5T780-280t-17.5-42.5T720-340"
										className="fill-slate-300"
									/>
								</svg>{" "}
								- Lorem Ips
							</p>
							<p className="flex items-center font-mono font-extrabold">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 -960 960 960"
									fill="currentColor"
								>
									<path
										d="M620-40q-104 0-183.5-62T331-260q45 2 89-9t84-31h164q1-11 1.5-21.5t.5-21.5q0-9-.5-18.5T668-380h-59q16-18 29.5-38t24.5-42h141q-20-30-48-52.5T693-547q5-20 6.5-41t.5-41q96 26 158 105.5T920-340q0 125-87.5 212.5T620-40m-95-102q-7-20-12.5-39t-9.5-39h-67q17 25 39.5 45t49.5 33m95 14q12-22 20.5-45t14.5-47h-70q6 24 15 47t20 45m95-14q27-13 49.5-33t39.5-45h-67q-5 20-10 39t-12 39m33-158h88q2-10 3-19.5t1-20.5-1-20.5-3-19.5h-88q1 9 1.5 18.5t.5 18.5q0 11-.5 21.5T748-300m-408-20q-125 0-212.5-87.5T40-620t87.5-212.5T340-920t212.5 87.5T640-620t-87.5 212.5T340-320m0-80q91 0 155.5-64.5T560-620t-64.5-155.5T340-840t-155.5 64.5T120-620t64.5 155.5T340-400M240-640q17 0 28.5-11.5T280-680t-11.5-28.5T240-720t-28.5 11.5T200-680t11.5 28.5T240-640m100 176q48 0 85.5-27t54.5-69H200q17 42 54.5 69t85.5 27m100-176q17 0 28.5-11.5T480-680t-11.5-28.5T440-720t-28.5 11.5T400-680t11.5 28.5T440-640m-100 20"
										className="fill-slate-400"
									/>
								</svg>{" "}
								- en & de
							</p>
							<p className="flex items-center font-mono font-extrabold">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 -960 960 960"
								>
									<path
										d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h168q14-36 44-58t68-22 68 22 44 58h168q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120zm280-670q13 0 21.5-8.5T510-820t-8.5-21.5T480-850t-21.5 8.5T450-820t8.5 21.5T480-790M200-246q54-53 125.5-83.5T480-360t154.5 30.5T760-246v-514H200zm280-194q58 0 99-41t41-99-41-99-99-41-99 41-41 99 41 99 99 41M280-200h400v-10q-42-35-93-52.5T480-280t-107 17.5-93 52.5zm200-320q-25 0-42.5-17.5T420-580t17.5-42.5T480-640t42.5 17.5T540-580t-17.5 42.5T480-520m0 17"
										className="fill-slate-300"
									/>
								</svg>{" "}
								- Student
							</p>
						</div>
					</div>
					<a
						href="https://https://dev.to/whirl"
						target="_blank"
						rel="noreferrer"
						className="flex items-center mx-20 mt-10 btn btn-primary"
					>
						Read My Blog
					</a>
				</div>
			</div>
			{/* Left half: Bento */}
			<div className="flex items-center justify-center flex-1 p-4 bg-gradient-to-l from-transparent to-slate-950 md:p-0">
				{/* <div className="flex flex-wrap justify-center">
          <img
            src="https://github-readme-streak-stats.herokuapp.com/?user=whirlxd&theme=tokyonight&hide_border=true&show_icons=true"
            alt="streak"
            className="w-full h-40 md:h-52"
          />
          <img src={me} alt="me" className="h-32 m-2 w-36 rounded-xl" />
          <img src={me} alt="me" className="h-32 m-2 w-36 rounded-xl" />
          <div className="flex justify-center w-full">
            <img
              src="https://spotify-github-profile.kittinanx.com/api/view?uid=0qr4lrrkcrzshcpxp5so11tcv&cover_image=true&theme=novatorem&show_offline=false&background_color=fff&interchange=true&bar_color=3cc837&bar_color_cover=false"
              alt="spotify"
              className="w-3/4 "
            />
          </div>
        </div> */}
				<Bento className="flex items-center justify-center" />
			</div>
		</div>
	);
}

export default infographic;
