const CardComponent = (props) => {
    const { img,role, organisation, experience } = props.data
    return (
        <div>
            <img className="pic" src="https://lwfiles.mycourse.app/635a5db526fa77c557bab00d-public/2d54832dbf7c5cb77f0c44314840b1e9.gif" />
            <div className="role">{role}</div>
            <div className="org">{organisation}</div>
            <div className="exp">{experience}</div>
        </div>
    )
}

export default CardComponent;