import React from "react";
import "./addProduct.css";

export default function addProduct() {
	return (
		<div className="mainDivAddP">
			<div>
				<div class="container form_style d-flex align-items-center justify-content-center">
					<form className="formAddP">
						<div className="d2addP">
							<div className="d3addP">
								<h2>Add Product</h2>
								<div className="form-group">
									<label for="inptName">Name</label>
									<input
										type="text"
										className="form-control fc"
										id="inptName"
									/>
								</div>

								<div className="form-group">
									<label for="inptPrice">Price</label>
									<input
										type="number"
										className="form-control fc"
										id="inptPrice"
									/>
								</div>

								<div className="form-group">
									<label for="inptDesc">Desciption</label>
									<input
										type="text"
										className="form-control fc"
										id="inptDesc"
									/>
								</div>

								<div className="form-group">
									<label for="inptClr">Colour</label>
									<input
										type="text"
										className="form-control fcaddP"
										id="inptClr"
									/>
								</div>

								<div className="form-group">
									<label for="inptDimnsn">Dimensions</label>
									<input
										type="number"
										className="form-control fc"
										id="inptDimnsn"
									/>
								</div>

								<div className="form-group">
									<label for="inptImg">Upload Image</label>
									<input
										type="file"
										className="form-control fc"
										id="inptImg"
										accept="image/x-png,image/gif,image/jpeg"
									/>
								</div>

								<div className="form-group">
									<label for="inptSellName">Seller Name</label>
									<input
										type="text"
										className="form-control fc"
										id="inptSellName"
									/>
								</div>

								<div className="form-group">
									<label for="inptBrdName">Brand Name</label>
									<input
										type="text"
										className="form-control fc"
										id="inptBrdName"
									/>
								</div>

								<button id="addP" class="btn btn2addP">
									Add
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
