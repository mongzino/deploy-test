import "./Profile.css";

export default function Profile(props) {
  return (
    <>
      <h1>{props.user.name}</h1>
      <img
        className="avatar"
        src={props.user.imageUrl}
        alt={"Photo of " + props.user.name}
        style={{
          width: props.user.imageSize,
          height: props.user.imageSize,
        }}
      />
    </>
  );
}
