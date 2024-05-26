const FindOrder = () => {
  return (
    <div className="p-3">
      <h1 className=" font-bold text-white p-2">DID YOU ORDER ALREADY?</h1>
      <p className="mb-6 text-white">
        You can find your bitsy order by giving us your email adress
      </p>
      <input type="text" placeholder="Email" className=" p-2 mr-2 rounded-xl" />
      <button className=" rounded-md bg-slate-100 p-2 mt-2">
        Dont press me
      </button>
    </div>
  );
};
export default FindOrder;
