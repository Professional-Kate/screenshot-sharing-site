const HeaderNavigation = () => {
  return (
    <li>
      <ul id="input-form" className="title-input-label">
        <li>
          <label htmlFor="title-input">Title</label>
          <input
            id="title-input"
            type="text"
            placeholder="Title"
            className="title-input"
          />
        </li>
        <li>
          <label htmlFor="description-input">Description</label>
          <input
            id="description-input"
            type="text"
            placeholder="description"
            className="title-input"
          />
        </li>
        <li>
          <label htmlFor="game-input">Game</label>
          <select name="game" id="game-input" className="title-input">
            {}
          </select>
        </li>
        <li>
          <label htmlFor="Photo-input">Photo</label>
          <input
            id="Photo-input"
            type="file"
            className="title-input"
            name="picture"
          />
          <input type="submit" id="file-upload-submit" value="Submit" />
        </li>
      </ul>
    </li>
  );
};

export default HeaderNavigation;
