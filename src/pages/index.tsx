import * as React from "react"
import type {HeadFC, PageProps} from "gatsby"
import {Layout} from "../components";

const IndexPage: React.FC<PageProps> = () => {
    return (
        <div className='index-component'>
            <Layout>
                <span>Pie halvah shortbread halvah bear claw. Dessert lemon drops soufflé chocolate cake halvah wafer dragée. Sesame snaps oat cake sesame snaps dessert cheesecake muffin cake liquorice topping. Gummi bears chocolate topping macaroon bonbon bonbon marshmallow lemon drops. Bear claw sugar plum powder pastry tootsie roll muffin. Pie muffin ice cream tiramisu cupcake dragée sugar plum. Gummies pastry cookie biscuit cupcake croissant candy dragée. Liquorice gummi bears sweet roll oat cake lollipop. Sesame snaps pie pastry jelly-o caramels bear claw carrot cake. Marzipan sweet dessert chocolate bar marshmallow lemon drops. Sweet roll carrot cake jelly gingerbread jelly beans apple pie tart oat cake caramels. Soufflé apple pie cheesecake soufflé topping powder soufflé gummies tart. Dessert cotton candy topping jelly-o sugar plum dessert. Croissant chocolate cake icing carrot cake cookie</span>
                <span></span>
            </Layout>
        </div>
    )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
