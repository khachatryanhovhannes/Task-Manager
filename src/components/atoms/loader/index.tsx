import { Oval } from 'react-loader-spinner'

function Loader() {
    return (
        <Oval
            height={200}
            width={2000}
            color="#4fa94d"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel='oval-loading'
            secondaryColor="#4fa94d"
            strokeWidth={5}
            strokeWidthSecondary={2}
        />
    )
}

export default Loader