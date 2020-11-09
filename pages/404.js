import { process } from "remark";

export default function Custom404(){
    return <div style={{height: '100vh', display: 'flex', flexGrow: 1, alignItems: 'center', justifyContent: 'center'}}>
        <img src='/images/404.svg' alt="" style={{width: 600}} />
    </div>
}