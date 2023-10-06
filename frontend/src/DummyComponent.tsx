import React, {useEffect} from "react";
import axios from "axios";

interface DummyComponentProps {
    thing: string;
}

export default function DummyComponent(props: DummyComponentProps) {
    const [hello, setHello] = React.useState<string>('hello');

    function getHello() {
        let response = axios.get('/hello');
        response.then((response) => {
            setHello(response.data);
        });
    }

    useEffect(() => {
            getHello();
        }
    )

    return (
        <>
            <div>Hello! This is a dummy component</div>
            <div>This is a prop: {props.thing}</div>
            <div>Hello: {hello}</div>
        </>
    )
}