import { useNavigate } from "react-router-dom";

const Card = ({
  imgUrl = "",
  title = "",
  pageId,
  updatedAt = "",
  updatedBy = "",
}) => {
  const navigate = useNavigate();

  return (
    <div className="border rounded-[1rem] bg-white flex flex-col">
      <div
        className="w-full h-[120px]"
        style={{
          backgroundImage: `url("${imgUrl}")`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          borderRadius: "1rem 1rem 0 0",
        }}
      />
      <div className="p-2 flex flex-col gap-2">
        <p className="font-medium">{title}</p>
        <p className="text-sm">UpdatedAt: {updatedAt}</p>
        <p className="text-sm">UpdatedBy: {updatedBy}</p>
        <div className="card-actions w-full flex gap-2">
          <button>Preview</button>
          <button onClick={() => navigate(`/edit/${pageId}`)}>Edit</button>
          <button>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
