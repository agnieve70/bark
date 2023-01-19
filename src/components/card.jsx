import {Icon} from '@amoutonbrady/solid-heroicons';
import {chevronDoubleRight} from '@amoutonbrady/solid-heroicons/solid';

export default function Card(props) {

    const { image, title, description, subtitle} = props;
    return (
        <div className="relative w-80 h-[26rem]">
            <div className={'w-full h-full bg-white rounded-[2rem] overflow-hidden shadow-2xl relative'}>
                <div className={'h-1/2 bg-pink-100'}>
                    <img src={image} height={'100%'} width={'auto'} className={'h-full w-full'}/>
                </div>
                <div className={'h-1/2 py-2 px-4 relative bg-white'}>
                    <h1 className={'text-2xl font-bold text-primary'}>{title}</h1>
                    {subtitle && <h2 className={'text-lg font-bold text-slate-700'}>{subtitle}</h2>}
                    <p className="text-lg mt-2">{description}</p>
                </div>

            </div>
            <button
                className={'absolute -bottom-5 right-8 bg-primary p-2 rounded-full h-11 w-11 flex justify-center items-center'}>
                <Icon path={chevronDoubleRight} class={' text-white h-4'}/>
            </button>
        </div>
    )
}