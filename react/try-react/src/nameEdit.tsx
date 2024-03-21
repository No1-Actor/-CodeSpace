import * as React from 'react'

interface Props {
    userName: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void 
}

const NameEditComponent: React.FC<Props> = (Props) => {
    return(
        <div>
            <label>Update name</label> 
            <input value= {Props.userName} onChange={Props.onChange} />
        </div>
    )
}

export default NameEditComponent