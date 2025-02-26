

function Project ({name, description, image}) {
    return (
        <div className="sinProj" style={{backgroundImage: `url(${image})`}}>
            <div className="projHover" />
            <div className="sinProjHead">
                <h1 className="sinProjTitle">{name}</h1>
                <p className="sinProjDesc">{description}</p>
            </div>
        </div>
    )
}

export default Project