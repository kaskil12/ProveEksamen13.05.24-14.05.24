
import { Map } from '../../prefabs/Map';


function LokasjonSide() {
    return (
        <>
            <h1 className='text-white text-center text-9xl font-bold mt-9'>Om oss</h1>
            <div className='flex flex-col sm:flex-row items-center px-4 justify-center gap-16'>
                <Map />
                <h1 className='text-white text-4xl text-center max-w-[50rem]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur provident blanditiis ipsa placeat fugiat in labore a ipsam ipsum dolor quod pariatur accusantium dignissimos iusto qui, magnam cupiditate maiores mollitia.</h1>
            </div>
        </>
    );
}

export default LokasjonSide;
