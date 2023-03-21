export default function ProductDetail(props) {
    return(
        <div>
            <h1>Product Detail {props?.id}</h1>
        </div>
    )
}

export async function getServerSideProps(context) {
    let { id } = context.params
    return {
        props: {
            id
        }
    }
}