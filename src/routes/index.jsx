import {A} from "solid-start";
import Counter from "~/components/Counter";
import Card from "~/components/card";
import {chevronRight, chevronLeft} from "@amoutonbrady/solid-heroicons/solid";
import {Icon} from "@amoutonbrady/solid-heroicons";

export default function Home() {
    return (
        <main class="">
            <div
                className="w-full h-[48rem] bg-[url('https://th.bing.com/th/id/R.85e4a0b94d0d280973eb0663dde343cd?rik=wLVUDu6faRnndA&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f06%2fHD-Siberian-Husky-Backgrounds.jpg&ehk=Pn%2ft%2f6JRVvNM7fykKZ7p1z%2bajjlo%2bo%2frQpDlswfEk6A%3d&risl=&pid=ImgRaw&r=0')]">
                <div className={'w-2/5 pl-16 pt-20'}>
                    <h1 className={'text-6xl font-black text-white mb-5'}>WELCOME TO BARK</h1>
                    <h2 className={'text-3xl text-white'}>BARK is an Australian-based Not-for-Profit Association
                        established to support the pet industry</h2>
                    <div className="flex items-center mt-10">
                        <button
                            className={'text-lg font-bold mr-2 bg-primary text-white rounded-full px-12 py-4'}>MEMBER
                        </button>
                        <button
                            className={'text-lg font-bold bg-secondary text-white rounded-full px-12 py-4'}>CONSUMER
                        </button>
                    </div>
                </div>
            </div>
            <div className={'bg-white'}>
                <div className={'px-20 flex justify-center py-20'}>
                    <div className={'w-1/2'}>
                        <img src={'./img/icon-01.png'} width={500}/>
                    </div>
                    <div className={'w-1/2'}>
                        <h1 className={'text-5xl font-bold text-primary mb-10'}>ABOUT BARK</h1>
                        <p className={'text-lg leading-9 pr-20 mb-10'}>Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit. Corporis, debitis, dignissimos, enim eum inventore magni minima mollitia
                            neque nobis officiis optio quas quasi quis. Deserunt dolorum esse expedita laborum libero
                            nisi nostrum sapiente. Delectus eius facere impedit ipsam officia optio quidem rem rerum
                            suscipit ut?</p>
                        <button className={'text-lg font-bold bg-secondary text-white rounded-full px-12 py-4'}>READ
                            MORE
                        </button>
                    </div>
                </div>
            </div>
            <div className="bg-slate-50">
                <div className={'px-20 flex justify-center py-20'}>
                    <div className="w-1/2">
                        <h1 className={'text-5xl font-bold text-primary mb-10'}>WHAT WE DO</h1>
                        <p className={'text-lg leading-9 pr-20 mb-10'}>Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit. Delectus et nihil provident rerum voluptates. Explicabo, quos voluptatem!
                            Cumque debitis delectus et expedita fuga harum quidem repudiandae totam ut voluptas.
                            Dignissimos.</p>
                        <button className={'text-lg font-bold bg-secondary text-white rounded-full px-12 py-4'}>READ
                            MORE
                        </button>
                    </div>
                    <div className="w-1/2 h-80">
                        <div className={'relative w-3/4'}>
                            <div className={'absolute -top-5 right-0'}>
                                <Card
                                    image="https://www.rd.com/wp-content/uploads/2019/02/shutterstock_1062367388-e1549471104486.jpg?resize=700,501"
                                    title="Members Services"
                                    description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate fugiat incidunt tempora."}
                                />
                            </div>
                            <div className={'absolute top-12 left-0'}>
                                <Card
                                    image="https://cff2.earth.com/uploads/2019/02/26123103/Dogs-tend-to-adopt-the-same-personality-traits-as-their-owners.jpg"
                                    title="Public Access Portal"
                                    description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic ipsam labore mollitia nostrum obcaecati, quam."
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={'bg-white mt-20'}>
                <div className={'px-20 flex justify-center py-20'}>
                    <div className="w-1/2">
                        <h1 className={'text-5xl font-bold text-primary mb-10'}>EDUCATION FOR DOG BREEDERS</h1>
                        <p className={'text-lg leading-9 pr-20 mb-10'}>Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit. Accusamus accusantium animi aspernatur dolore excepturi fugit in labore
                            optio, porro possimus quos rem velit? Accusamus assumenda autem delectus natus quibusdam
                            saepe!</p>
                        <button className={'text-lg font-bold bg-secondary text-white rounded-full px-12 py-4'}>READ
                            MORE
                        </button>
                    </div>
                    <div className="w-1/2">
                        <div className={'rounded-tl-[2rem] rounded-br-[2rem] overflow-hidden'}>
                            <img src={'https://topdogtips.com/wp-content/uploads/2016/12/tips-for-new-dog-owners.jpg'}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className={'bg-secondary h-96'}>
                <div className={'px-20 flex flex-col items-center py-20'}>
                    <h1 className={'text-5xl font-bold text-white mb-10'}>MEMBERSHIP</h1>
                    <p className={'text-lg leading-9 pr-20 mb-10 text-white'}>Membership with the association consists
                        of the following classes:</p>
                    <div className={'flex space-x-10 items-center'}>
                        <button>
                            <Icon path={chevronLeft} class={' text-primary h-12'}/>
                        </button>
                        <Card
                            image="https://dogblog.com/wp-content/uploads/2021/02/Golden-Rewards-Dog-Treats-Review.jpg"
                            title="Provisional Breeder"
                            subtitle={"(Limited Membership)"}
                            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic ipsam labore"
                        />
                        <Card
                            image="https://th.bing.com/th/id/OIP.DwRB9AelcdxILyS2AcEIKAAAAA?pid=ImgDet&w=460&h=246&rs=1"
                            title="Registered Kennel"
                            subtitle={"(Full Membership)"}
                            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic ipsam labore mollitia"
                        />
                        <Card
                            image="https://th.bing.com/th/id/OIP.-qXQCTboQcEVX9Fe9-sRPgHaD4?pid=ImgDet&rs=1"
                            title="Registered Kennel"
                            subtitle={"(Family/Partner Membership)"}
                            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic ipsam labore mollitia "
                        />
                        <button>
                            <Icon path={chevronRight} class={' text-primary h-12'}/>
                        </button>
                    </div>
                </div>
            </div>
            <div className={'mt-72'}>
                <div className={'px-20 flex justify-center space-x-7 pt-20 '}>
                    <div className="w-1/2 p-10">
                        <div className={'rounded-tl-[2rem] rounded-br-[2rem] overflow-hidden'}>
                            <img src={'https://rwrant.co.za/wp-content/uploads/2019/06/Dog-Owner-600x400.jpg'}
                                 className={'w-full h-full'}/>
                        </div>
                    </div>
                    <div className="w-1/2 p-20">
                        <h1 className={'text-5xl font-bold text-primary mb-10'}>PUBLIC RESOURCES</h1>
                        <p className={'text-lg leading-9 pr-20 mb-10'}>Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit. Accusamus accusantium animi aspernatur dolore excepturi fugit in labore
                            optio, porro possimus quos rem velit? Accusamus assumenda autem delectus natus quibusdam
                            saepe!</p>
                        <button className={'text-lg font-bold bg-secondary text-white rounded-full px-12 py-4'}>READ
                            MORE
                        </button>
                    </div>
                </div>
            </div>
            <div className="mt-20 bg-slate-50">
                <div className={'px-20 flex items-center flex-col justify-center space-x-7 py-20'}>
                    <h1 className={'text-5xl font-bold text-primary mb-10'}>TESTIMONIALS</h1>
                    <div className="flex space-x-4">
                        <button>
                            <Icon path={chevronLeft} class={' text-primary h-12'}/>
                        </button>
                        <div className="w-1/2 px-20">
                            <img src={'./img/left-quote.png'} width={40}/>
                            <p className={'text-lg leading-9'}>"Lorem ipsum dolor sit amet, consectetur adipisicing
                                elit. Ab accusantium architecto cum cumque, dolor eveniet expedita illo, ipsum maiores
                                quos, temporibus vel? At commodi dolor eius excepturi fuga maxime nemo nihil non
                                officiis placeat. Illo laboriosam molestias velit veniam voluptatem!"</p>
                            <div className="flex items-center space-x-4">
                                <div className={'rounded-full h-20 w-20 overflow-hidden'}>
                                    <img className={'h-full w-full'}
                                         src={'https://www.thefamouspeople.com/profiles/images/robert-downey-jr--2.jpg'}/>
                                </div>
                                <h2 className={'text-primary text-2xl font-bold'}>Robert Downey Jr.</h2>
                            </div>
                        </div>
                        <div className="w-1/2">
                            <img src={'./img/left-quote.png'} width={40}/>
                            <p className={'text-lg leading-9'}>"Lorem ipsum dolor sit amet, consectetur adipisicing
                                elit. Ab asperiores aspernatur blanditiis dicta doloremque eaque ex impedit iure modi,
                                molestiae molestias natus odit pariatur quam rerum. Aliquam blanditiis deserunt fuga
                                nesciunt, quibusdam quod totam."</p>
                            <div className="flex items-center space-x-4">
                                <div className={'rounded-full h-20 w-20 overflow-hidden'}>
                                    <img className={'h-full w-full'}
                                         src={'./img/profile.png'}/>
                                </div>
                                <h2 className={'text-primary text-2xl font-bold'}>AG Nieve</h2>
                            </div>
                        </div>
                        <button>
                            <Icon path={chevronRight} class={' text-primary h-12'}/>
                        </button>
                    </div>
                </div>
            </div>
            <div className="bg-white">
                <div className={'px-20 flex items-center flex-col justify-center space-x-7 py-20'}>
                    <h1 className={'text-5xl font-bold text-primary mb-10'}>NEWSLETTER SIGN UP</h1>
                    <h4 className={'text-center px-20 text-lg text-slate-700'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores in officiis perferendis. Aliquam amet at, autem beatae, blanditiis culpa deserunt distinctio dolore dolores earum error exercitationem fugiat harum illum inventore ipsam itaque labore laudantium magni maiores necessitatibus nesciunt odio perspiciatis porro praesentium provident quibusdam repellat reprehenderit rerum saepe sunt tempore.</h4>

                    <div className={'mt-10 bg-white shadow-2xl px-5 py-2 rounded-full w-1/2 flex justify-between'}>
                        <input className={'text-2xl rounded-full px-5 w-full'} placeholder={'Enter Email Address'} />
                        <button className={'text-2xl font-bold bg-secondary text-white rounded-full px-12 py-4'}>Subscribe
                        </button>
                    </div>
                </div>
            </div>

        </main>
    );
}
