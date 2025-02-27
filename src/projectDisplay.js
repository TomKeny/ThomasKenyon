

function Project ({name, description, image, link}) {
    return (
        <a className="sinProj" style={{backgroundImage: `url(${image})`}} href={link}>
            <div className="projHover" />
            <div className="sinProjHead">
                <h1 className="sinProjTitle">{name}</h1>
                <p className="sinProjDesc">{description}</p>
            </div>
        </a>
    )
}

export default Project