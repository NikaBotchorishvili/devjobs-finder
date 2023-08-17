function DetailsContent() {
	return (
		<>
            <section className="fixed bottom-0 w-full bg-white dark:bg-veryDarkBlue h-[100px]">
                <div className="w-[80%] sm:w-[70%] md:w-[50%] mx-auto flex justify-between items-end">
                    <div>
                        <h1 className="text-veryDarkBlue dark:text-white pt-5 font-bold text-xl">Software Engineer</h1>
                        <small className="text-darkGrey">So Digital Inc.</small>

                    </div>
                    <button className="btn-primary ">Apply Now</button>                        

                </div>
            </section>
			<main className="w-[80vw] shadow-[0_0_5px_2px_rgba(0,0,0,0.2)] dark:shadow-none sm:w-[70vw] md:w-[50vw] dark:bg-veryDarkBlue mx-auto  mb-36 box-border p-5 rounded-xl">
				<section className="flex flex-col gap-y-10">
					<div className="flex justify-between items-center">
						<div>
							<small className="text-darkGrey text-md flex gap-x-2">
								<span>1w ago</span>
								<span>.</span>
								<span>Part Time</span>
							</small>
							<h1 className="text-xl font-bold text-veryDarkBlue dark:text-white">
								Senior Software Engineer
							</h1>
							<small className="text-violet font-bold text-md">
								United States
							</small>
						</div>
						<button className="btn-primary">Apply Now</button>
					</div>

					<article className="text-darkGrey">
						<p>
							Lorem ipsum dolor sit amet, consectetuer adipiscing
							elit. Phasellus hendrerit. Pellentesque aliquet nibh
							nec urna. In nisi neque, aliquet vel, dapibus id,
							mattis vel, nisi. Sed pretium, ligula sollicitudin
							laoreet viverra, tortor libero sodales leo, eget
							blandit nunc tortor eu nibh. Nullam mollis. Ut
							justo. Suspendisse potenti. Sed egestas, ante et
							vulputate volutpat, eros pede semper est, vitae
							luctus metus libero eu augue. Morbi purus libero,
							faucibus adipiscing, commodo quis, gravida id, est.
							Sed lectus. Praesent elementum hendrerit tortor. Sed
							semper lorem at felis. Vestibulum volutpat, lacus a
							ultrices sagittis, mi neque euismod dui, eu pulvinar
							nunc sapien ornare nisl. Phasellus pede arcu,
							dapibus eu, fermentum et, dapibus sed, urna.
						</p>
					</article>

					<article className="text-darkGrey">
						<h1 className="text-xl font-bold dark:text-white text-veryDarkBlue mb-5">
							Requirements
						</h1>

						<p>
							Morbi interdum mollis sapien. Sed ac risus.
							Phasellus lacinia, magna a ullamcorper laoreet,
							lectus arcu pulvinar risus, vitae facilisis libero
							dolor a purus. Sed vel lacus. Mauris nibh felis,
							adipiscing varius, adipiscing in, lacinia vel,
							tellus. Suspendisse ac urna. Etiam pellentesque
							mauris ut lectus. Nunc tellus ante, mattis eget,
							gravida vitae, ultricies ac, leo. Integer leo pede,
							ornare a, lacinia eu, vulputate vel, nisl.
						</p>

						<ul className="flex flex-col gap-y-5">
							<li className="before:content-[''] w-full h-full before:w-[5px] before:h-[5px] before:rounded-full before:bg-violet before:inline-block before:mr-5">
								Morbi interdum mollis sapien. Sed
							</li>
							<li className="before:content-[''] w-full h-full before:w-[5px] before:h-[5px] before:rounded-full before:bg-violet before:inline-block before:mr-5">
								Phasellus lacinia magna a ullamcorper laoreet,
								lectus arcu pulvinar risus
							</li>
							<li className="before:content-[''] w-full h-full before:w-[5px] before:h-[5px] before:rounded-full before:bg-violet before:inline-block before:mr-5">
								Mauris nibh felis, adipiscing varius, adipiscing
								in, lacinia vel, tellus. Suspendisse ac urna.
								Etiam pellentesque mauris ut lectus.
							</li>
							<li className="before:content-[''] w-full h-full before:w-[5px] before:h-[5px] before:rounded-full before:bg-violet before:inline-block before:mr-5">
								Morbi interdum mollis sapien. Sed
							</li>
						</ul>
					</article>
					<article className="text-darkGrey">
						<h1 className="text-xl font-bold text-veryDarkBlue dark:text-white mb-5">
							What You Will Do
						</h1>

						<p>
							Sed egestas, ante et vulputate volutpat, eros pede
							semper est, vitae luctus metus libero eu augue.
							Morbi purus libero, faucibus adipiscing, commodo
							quis, gravida id, est. Sed lectus. Praesent
							elementum hendrerit tortor. Sed semper lorem at
							felis. Vestibulum volutpat, lacus a ultrices
							sagittis, mi neque euismod dui, eu pulvinar nunc
							sapien ornare nisl. Phasellus pede arcu, dapibus eu,
							fermentum et, dapibus sed, urna.
						</p>

						<ul className="flex flex-col gap-y-5 ">
							<li className="before:content-['1']  w-full h-full before:text-violet before:inline-block before:mr-5">
								Morbi interdum mollis sapien. Sed
							</li>
							<li className="before:content-['2'] w-full h-full before:text-violet before:inline-block before:mr-5">
								Phasellus lacinia magna a ullamcorper laoreet,
								lectus arcu pulvinar risus
							</li>
							<li className="before:content-['3'] w-full h-full before:text-violet before:inline-block before:mr-5">
								Mauris nibh felis, adipiscing varius, adipiscing
								in, lacinia vel, tellus. Suspendisse ac urna.
								Etiam pellentesque mauris ut lectus.
							</li>
							<li className="before:content-['4'] w-full h-full before:text-violet before:inline-block before:mr-5">
								Morbi interdum mollis sapien. Sed
							</li>
						</ul>
					</article>
				</section>
			</main>
		</>
	);
}

export default DetailsContent;
