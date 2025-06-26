import { Bank } from "../../models/bank.model.js";
import { asyncHandler } from "../../utils/asynchandler.js";
import { ApiResponse } from "../../utils/apiresponse.js"
import { HomeLoan } from "../../models/homeloan.model.js";
import { MortgageLoan } from "../../models/mortgageloan.model.js";
import { IndustrialPurchase } from "../../models/industrial.model.js";
import { CommercialPurchase } from "../../models/commercial.model.js";
import { Insurance } from "../../models/insurance.model.js";
import { AgeCriteria } from "../../models/age.model.js";
import { Policy } from "../../models/policy.model.js";
import { objectMaker } from "../../utils/objectmaker.js";



const createBank = asyncHandler(async (req, res) => {
  const { bank_name, home_loan, mortgage_loan, commercial_loan, industrial_loan, login_fees, insurance, tenor_salaried, tenor_self_employed, geo_limit, age, legal_charges, valuation_charges, extra_work, policy, parallel_funding, contact_number } = req.body;

  //creating  objects
  const home_loan_id = await objectMaker(HomeLoan, home_loan, res);
  const mortgage_loan_id = await objectMaker(MortgageLoan, mortgage_loan, res);
  const commercial_loan_id = await objectMaker(CommercialPurchase, commercial_loan, res);
  const industrial_loan_id = await objectMaker(IndustrialPurchase, industrial_loan, res);
  const insurance_id = await objectMaker(Insurance, insurance, res);
  const age_id = await objectMaker(AgeCriteria, age, res);
  const policy_id = await objectMaker(Policy, policy, res)


  const createBank = await Bank.create(
    {
      bank_name,
      home_loan: home_loan_id,
      mortgage_loan: mortgage_loan_id,
      commercial_loan: commercial_loan_id,
      industrial_loan: industrial_loan_id,
      login_fees,
      insurance: insurance_id,
      tenor_salaried,
      tenor_self_employed,
      geo_limit,
      age: age_id,
      legal_charges,
      valuation_charges,
      extra_work,
      policy: policy_id,
      parallel_funding,
      contact_number
    }
  )

  if (!createBank) {
    return res.status(500)
      .json(
        new ApiResponse(500, "something problem to create bank", { success: false, data: "BankNotCreateError" })
      )
  }

  return res.status(200)
    .json(
      new ApiResponse(200, "Bank Create SuccessFully", { success: true, data: createBank })
    )


})

const getAllBanks = asyncHandler(async (req, res) => {
  const banks = await Bank.aggregate([
    {
      $lookup: {
        from: "homeloans",
        localField: "home_loan",
        foreignField: "_id",
        as: "home_loan"
      }
    },
    {
      $addFields: {
        home_loan: { $arrayElemAt: ["$home_loan", 0] }
      }
    },
    {
      $lookup: {
        from: "mortgageloans",
        localField: "mortgage_loan",
        foreignField: "_id",
        as: "mortgage_loan"
      }
    },
    {
      $addFields: {
        mortgage_loan: { $arrayElemAt: ["$mortgage_loan", 0] }
      }
    },
    {
      $lookup: {
        from: "commercialpurchases",
        localField: "commercial_loan",
        foreignField: "_id",
        as: "commercial_loan"
      }
    },
    {
      $addFields: {
        commercial_loan: { $arrayElemAt: ["$commercial_loan", 0] }
      }
    },
    {
      $lookup: {
        from: "industrialpurchases",
        localField: "industrial_loan",
        foreignField: "_id",
        as: "industrial_loan"
      }
    },
    {
      $addFields: {
        industrial_loan: { $arrayElemAt: ["$industrial_loan", 0] }
      }
    },
    {
      $lookup: {
        from: "insurances",
        localField: "insurance",
        foreignField: "_id",
        as: "insurance"
      }
    },
    {
      $addFields: {
        insurance: { $arrayElemAt: ["$insurance", 0] }
      }
    },
    {
      $lookup: {
        from: "agecriterias",
        localField: "age",
        foreignField: "_id",
        as: "age"
      }
    },
    {
      $addFields: {
        age: { $arrayElemAt: ["$age", 0] }
      }
    },
    {
      $lookup:{
        from: "policies",
        localField: "policy",
        foreignField: "_id",
        as: "policy"
      }
    },
    {
      $addFields: {
        policy: { $arrayElemAt: ["$policy", 0] }
      }
    }
  ]);

  return res.status(200)
    .json(
      new ApiResponse(200, "fetch all bank data", { success: true, data: banks })
    )
})

const searchBank = asyncHandler(async (req, res) => {

  const data = req.body;


  const bank_data = await Bank.aggregate(
    [
      {
        $lookup: {
          from: "homeloans",
          localField: "home_loan",
          foreignField: "_id",
          as: "home_loan"
        }
      },
      {
        $addFields: {
          home_loan: { $arrayElemAt: ["$home_loan", 0] }
        }
      },
      {
        $lookup: {
          from: "mortgageloans",
          localField: "mortgage_loan",
          foreignField: "_id",
          as: "mortgage_loan"
        }
      },
      {
        $addFields: {
          mortgage_loan: { $arrayElemAt: ["$mortgage_loan", 0] }
        }
      },
      {
        $lookup: {
          from: "commercialpurchases",
          localField: "commercial_loan",
          foreignField: "_id",
          as: "commercial_loan"
        }
      },
      {
        $addFields: {
          commercial_loan: { $arrayElemAt: ["$commercial_loan", 0] }
        }
      },
      {
        $lookup: {
          from: "industrialpurchases",
          localField: "industrial_loan",
          foreignField: "_id",
          as: "industrial_loan"
        }
      },
      {
        $addFields: {
          industrial_loan: { $arrayElemAt: ["$industrial_loan", 0] }
        }
      },
      {
        $lookup: {
          from: "insurances",
          localField: "insurance",
          foreignField: "_id",
          as: "insurance"
        }
      },
      {
        $addFields: {
          insurance: { $arrayElemAt: ["$insurance", 0] }
        }
      },
      {
        $lookup: {
          from: "agecriterias",
          localField: "age",
          foreignField: "_id",
          as: "age"
        }
      },
      {
        $addFields: {
          age: { $arrayElemAt: ["$age", 0] }
        }
      },
      {
        $lookup: {
          from: "policies",
          localField: "policy",
          foreignField: "_id",
          as: "policy"
        }
      },
      {
        $addFields: {
          policy: { $arrayElemAt: ["$policy", 0] }
        }
      },
      {
        $match: data
      }
    ]

  )

  return res.status(200)
    .json(
      new ApiResponse(200, "data fetch successfully", { success: true, data: bank_data })
    )


})


export { createBank, searchBank, getAllBanks };






//const bankWithDetails = await Bank.findById(bankId).populate('home_loan mortgage_loan insurance');
