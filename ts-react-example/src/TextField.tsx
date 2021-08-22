import React, { useState, useRef } from 'react'

interface Person {
    firstName: string;
    lastName: string;
}

interface TextNode {
    text: string
}

interface Props {
    text: string;
    ok?: boolean;
    i?: number;
    fn: (bob: string) => string;
    obj: {
        f1: string
    }
    person: Person
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const TextField: React.FC<Props> = ({
    handleChange
}) => {

    const [count, setCount] = useState<TextNode>({text: "hi"});
    const inputRef = useRef<HTMLInputElement>(null);
    const divRef = useRef<HTMLDivElement>(null);

    setCount({text: "bye"});

    return (
        <div ref={divRef}>
            <input ref={inputRef} onChange={handleChange}/>
        </div>
    )
}

export default TextField