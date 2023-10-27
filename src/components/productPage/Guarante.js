import Guarante from "../../static/ProductPage/Guarantee/Guarantee.png";



const Guarantee = () => {
    return (
      <>
        <div className="col-6">
<h6 className="first-p h6-300">Zapewniamy dożywotnią gwarancję na szczelność zestawów i 10 letnią gwarancję na powłokę lakierniczą.*</h6>
<h6 className="second-p h6-300">* Gwarancja nie obejmuje uszkodzeń mechanicznych z winy użytkownika, jak również odbarwień lub odprysków lakieru spowodowanych długotrwałym działaniem czynników zewnętrznych (atmosferycznych) oraz źle dobranych i stosowanych środków czyszczących i konserwujących.</h6>
</div>
              <div className="col-6">
                <img className="ImgGuarantee" src={Guarante}  alt="gurantee"/>
              </div>

      </>
    );
  };
  
  export default Guarantee;
  