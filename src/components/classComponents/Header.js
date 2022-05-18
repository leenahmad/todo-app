import "normalize.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import { Navbar,Alignment ,Button,Colors} from "@blueprintjs/core";
export default function Header() {
    return (

        <Navbar style={{ background: Colors.ROSE5  , align: Alignment.CENTER}}>
        <Navbar.Group align={Alignment.CENTER}>
            
            
            <Button style={{ color: Colors.BLACK}} className="bp4-minimal"  text="Home" />
            
        </Navbar.Group>
    </Navbar>

    )
}