const ListItems = props => {
    return (
     <div className="flex-grow mb-4 w-50">
        <div className="text-center">
          <div className="mb-3">
            <img
              alt="point icon"
              className="list-item-icon"
              src={props.listItem.icon}
            />
          </div>
          <div className="list-items mx-auto px-sm-5">
            <h5 className="mb-3">
              <strong>{props.listItem.header}</strong>
            </h5>
            <p className="m-0 text-break">
              {props.listItem.content}
            </p>
          </div>
        </div>
      </div>
    )
}

export default ListItems
