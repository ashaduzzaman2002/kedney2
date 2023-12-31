import React from "react";

import {
  Button,
  Img,
  Input,
  Line,
  List,
  Radio,
  RadioGroup,
  Text,
} from "components";
import Footer from "components/Footer";

const MedicalServicesdetailPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-fredoka items-center justify-end mx-auto w-full">
        <div className="flex flex-col items-center justify-end w-full">
          <div className="flex flex-col md:px-5 relative w-full">
            <div className="bg-indigo-50_02 flex flex-col items-end justify-start mx-auto p-2 w-full">
              <div className="flex flex-col justify-start mb-8 mt-[23px] w-[96%] md:w-full">
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start md:ml-[0] ml-[55px] w-[88%] md:w-full">
                  <div className="flex flex-row font-fredoka gap-2 items-center justify-start w-[17%] md:w-full">
                    <Img
                      className="h-[52px] md:h-auto object-cover w-[52px]"
                      src="images/img_logo7701.png"
                      alt="logo7701"
                    />
                    <Text
                      className="text-blue_gray-900 text-lg w-[70%] sm:w-full"
                      size="txtFredokaSemiBold18"
                    >
                      Dhameliya Kidney Hospital
                    </Text>
                  </div>
                  <Text
                    className="md:ml-[0] ml-[52px] md:mt-0 mt-2 text-blue_gray-900 text-lg"
                    size="txtDMSansRegular18"
                  >
                    Home
                  </Text>
                  <Text
                    className="ml-8 md:ml-[0] md:mt-0 mt-2 text-blue_gray-900 text-lg"
                    size="txtDMSansRegular18"
                  >
                    About
                  </Text>
                  <div className="flex flex-col font-dmsans items-center justify-start ml-8 md:ml-[0] md:mt-0 mt-2 w-[15%] md:w-full">
                    <div className="flex flex-row gap-1.5 items-start justify-between w-full">
                      <Text
                        className="text-blue_gray-700 text-lg"
                        size="txtDMSansMedium18"
                      >
                        Medical Services
                      </Text>
                      <Img
                        className="h-4 mt-[3px] w-4"
                        src="images/img_checkmark_blue_gray_700.svg"
                        alt="checkmark"
                      />
                    </div>
                    <div className="bg-blue_gray-700 h-1.5 mt-[3px] rounded-[50%] w-1.5"></div>
                  </div>
                  <a
                    href="javascript:"
                    className="ml-8 md:ml-[0] md:mt-0 mt-2 text-blue_gray-900 text-lg"
                  >
                    <Text size="txtDMSansRegular18">Career</Text>
                  </a>
                  <Text
                    className="ml-8 md:ml-[0] md:mt-0 mt-2 text-blue_gray-900 text-lg"
                    size="txtDMSansRegular18"
                  >
                    News
                  </Text>
                  <Text
                    className="ml-8 md:ml-[0] md:mt-0 mt-2 text-blue_gray-900 text-lg"
                    size="txtDMSansRegular18"
                  >
                    Contact
                  </Text>
                  <div className="flex flex-row font-fredoka gap-5 items-center justify-between md:ml-[0] ml-[73px] w-[23%] md:w-full">
                    <Img
                      className="h-[30px] w-[30px]"
                      src="images/img_user.svg"
                      alt="user"
                    />
                    <div className="flex flex-col items-center justify-start">
                      <Button
                        className="cursor-pointer font-medium leading-[normal] min-w-[214px] text-center text-lg"
                        shape="round"
                        color="blue_gray_700"
                        size="md"
                        variant="fill"
                      >
                        Make Appointment
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                  <Img
                    className="h-[95px] md:h-auto md:mt-0 mt-[102px] object-cover w-[95px]"
                    src="images/img_65781551_95x95.png"
                    alt="65781551"
                  />
                  <div className="bg-red-A100 border border-black-900 border-solid h-4 mb-[85px] md:ml-[0] ml-[369px] md:mt-0 mt-24 rounded-[50%] w-4"></div>
                  <div className="bg-blue-A200 border border-solid border-white-A700 h-[13px] mb-[120px] md:ml-[0] ml-[552px] md:mt-0 mt-16 rounded-md w-[13px]"></div>
                  <Img
                    className="h-[105px] md:h-auto mb-[91px] ml-52 md:ml-[0] object-cover w-[105px]"
                    src="images/img_87919741_105x105.png"
                    alt="87919741"
                  />
                </div>
              </div>
            </div>
            <div className="h-[184px] md:h-[92px] mt-[-92px] mx-auto w-[70%] md:w-full z-[1]">
              <Img
                className="h-[184px] m-auto object-cover rounded-[92px] w-full"
                src="images/img_rectangle4376.png"
                alt="rectangle4376"
              />
              <div className="absolute flex flex-row h-max inset-y-[0] items-start justify-between left-[15%] my-auto w-[51%]">
                <Img
                  className="h-[51px] mt-[11px] w-[51px]"
                  src="images/img_minimize.svg"
                  alt="minimize"
                />
                <div className="flex flex-col gap-3 items-center justify-start">
                  <Text
                    className="sm:text-4xl md:text-[38px] text-[40px] text-center text-white-A700"
                    size="txtFredokaMedium40WhiteA700"
                  >
                    Medical Services
                  </Text>
                  <div className="flex flex-row font-dmsans gap-4 items-center justify-between w-[87%] md:w-full">
                    <Text
                      className="text-center text-white-A700 text-xl"
                      size="txtDMSansMedium20"
                    >
                      Home
                    </Text>
                    <div className="bg-white-A700 h-[9px] my-2 rounded w-[9px]"></div>
                    <Text
                      className="text-center text-white-A700 text-xl"
                      size="txtDMSansBold20"
                    >
                      Medical Services
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Img
            className="h-[607px] sm:h-auto max-w-[1184px] mt-[120px] mx-auto object-cover rounded-[24px] w-full"
            src="images/img_rectangle4355_607x1184.png"
            alt="rectangle4355"
          />
          <div className="flex md:flex-col flex-row md:gap-10 gap-[74px] items-center justify-end mt-8 md:px-5 w-[90%] md:w-full">
            <div className="flex flex-col items-start justify-start md:mt-0 mt-[5px] w-[56%] md:w-full">
              <Text
                className="sm:text-4xl md:text-[38px] text-[40px] text-blue_gray-700"
                size="txtFredokaMedium40Bluegray700"
              >
                <span className="text-blue_gray-700 font-fredoka text-left font-medium">
                  Kidney{" "}
                </span>
                <span className="text-blue_gray-900 font-fredoka text-left font-medium">
                  Stone
                </span>
              </Text>
              <Text
                className="mt-5 text-blue_gray-900 text-xl"
                size="txtFredokaMedium20Bluegray900"
              >
                Kidney Stones Treatment Fact :
              </Text>
              <Text
                className="mt-3.5 text-base text-blue_gray-400"
                size="txtDMSansRegular16Bluegray400"
              >
                Around 5% of the world population goes through kidney stone
                treatment in their lifetime.
              </Text>
              <Text
                className="leading-[139.88%] mt-[11px] text-base text-blue_gray-400 w-full"
                size="txtDMSansRegular16Bluegray400"
              >
                A stone is a hard, solid mass that can form in the gallbladder,
                bladder, and kidneys, pancreas etc. Generally, Kidney stones
                form when minerals or acid salts in urine crystalize. Most
                stones leave body while urinate. However, sometimes stones get
                stuck in the ureter, block the normal flow of urine, and cause
                symptoms. Stones can also be too big toleave the kidney. In both
                cases you may need treatment to remove the stone.
              </Text>
              <Text
                className="mt-[17px] text-blue_gray-900 text-xl"
                size="txtFredokaMedium20Bluegray900"
              >
                Medical terms for stones:
              </Text>
              <div className="flex md:flex-col flex-row font-dmsans md:gap-10 gap-[76px] items-center justify-start mt-[15px] w-[95%] md:w-full">
                <div className="flex flex-col gap-[13px] items-start justify-start w-[46%] md:w-full">
                  <div className="flex flex-row gap-1.5 items-center justify-start w-[45%] md:w-full">
                    <div className="bg-indigo-300 h-[5px] mb-1.5 mt-[9px] rounded-sm w-[5px]"></div>
                    <Text
                      className="text-base text-indigo-300"
                      size="txtDMSansMedium16"
                    >
                      Calculi → stones
                    </Text>
                  </div>
                  <div className="flex flex-row gap-1.5 items-center justify-start w-full">
                    <div className="bg-indigo-300 h-[5px] my-[7px] rounded-sm w-[5px]"></div>
                    <Text
                      className="text-base text-indigo-300"
                      size="txtDMSansMedium16"
                    >
                      Ureteral calculi → stones in your ureter
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col gap-2.5 items-start justify-start w-[44%] md:w-full">
                  <div className="flex flex-row gap-1.5 items-center justify-start w-full">
                    <div className="bg-indigo-300 h-[5px] my-[7px] rounded-sm w-[5px]"></div>
                    <Text
                      className="text-base text-indigo-300"
                      size="txtDMSansMedium16"
                    >
                      Renal calculi → stones in your kidney
                    </Text>
                  </div>
                  <div className="flex flex-row gap-1.5 items-center justify-start w-[78%] md:w-full">
                    <div className="bg-indigo-300 h-[5px] mb-1.5 mt-[9px] rounded-sm w-[5px]"></div>
                    <Text
                      className="text-base text-indigo-300"
                      size="txtDMSansMedium16"
                    >
                      Urolithiasis → stone disease
                    </Text>
                  </div>
                </div>
              </div>
              <Text
                className="mt-[18px] text-blue_gray-900 text-xl"
                size="txtFredokaMedium20Bluegray900"
              >
                Causes of stones:
              </Text>
              <div className="flex flex-row font-dmsans gap-1.5 items-center justify-start mt-4 w-[37%] md:w-full">
                <div className="bg-blue_gray-400 h-[5px] my-[7px] rounded-sm w-[5px]"></div>
                <Text
                  className="text-base text-blue_gray-400"
                  size="txtDMSansMedium16Bluegray400"
                >
                  A family history of stone disease
                </Text>
              </div>
              <div className="flex sm:flex-col flex-row font-dmsans sm:gap-10 items-center justify-between mt-[11px] w-full">
                <div className="flex flex-col gap-3 items-start justify-start">
                  <div className="flex sm:flex-col flex-row gap-1.5 items-center justify-start w-[83%] md:w-full">
                    <div className="bg-blue_gray-400 h-[5px] sm:mt-0 my-[7px] rounded-sm w-[5px]"></div>
                    <Text
                      className="text-base text-blue_gray-400"
                      size="txtDMSansMedium16Bluegray400"
                    >
                      A stone which contains brushite, uric acid, or urate
                    </Text>
                  </div>
                  <div className="flex sm:flex-col flex-row gap-1.5 items-center justify-start w-[86%] md:w-full">
                    <div className="bg-blue_gray-400 h-[5px] sm:mt-0 my-[7px] rounded-sm w-[5px]"></div>
                    <Text
                      className="text-base text-blue_gray-400"
                      size="txtDMSansMedium16Bluegray400"
                    >
                      Stones caused by an infection in your urinary system
                    </Text>
                  </div>
                  <div className="flex sm:flex-col flex-row gap-1.5 items-center justify-start w-full">
                    <div className="bg-blue_gray-400 h-[5px] sm:mt-0 my-[7px] rounded-sm w-[5px]"></div>
                    <Text
                      className="text-base text-blue_gray-400"
                      size="txtDMSansMedium16Bluegray400"
                    >
                      A genetic condition which makes you prone to forming
                      stones
                    </Text>
                  </div>
                  <div className="flex flex-row gap-1.5 items-center justify-start w-[46%] md:w-full">
                    <div className="bg-blue_gray-400 h-[5px] my-[7px] rounded-sm w-[5px]"></div>
                    <Text
                      className="text-base text-blue_gray-400"
                      size="txtDMSansMedium16Bluegray400"
                    >
                      A narrowing of your ureters
                    </Text>
                  </div>
                </div>
                <Img
                  className="h-[49px]"
                  src="images/img_volume.svg"
                  alt="volume"
                />
              </div>
              <div className="flex sm:flex-col flex-row font-dmsans gap-1.5 items-center justify-start mt-[11px] w-[74%] md:w-full">
                <div className="bg-blue_gray-400 h-[5px] sm:mt-0 my-[7px] rounded-sm w-[5px]"></div>
                <Text
                  className="text-base text-blue_gray-400"
                  size="txtDMSansMedium16Bluegray400"
                >
                  An obstruction at the junction where your ureter meets your
                  kidney
                </Text>
              </div>
              <div className="flex sm:flex-col flex-row font-dmsans gap-1.5 items-center justify-start mt-3 w-[55%] md:w-full">
                <div className="bg-blue_gray-400 h-[5px] sm:mt-0 my-[7px] rounded-sm w-[5px]"></div>
                <Text
                  className="text-base text-blue_gray-400"
                  size="txtDMSansMedium16Bluegray400"
                >
                  A cyst or a condition called calyceal diverticulum
                </Text>
              </div>
              <div className="flex sm:flex-col flex-row font-dmsans gap-1.5 items-center justify-start mt-[45px] w-[54%] md:w-full">
                <div className="bg-blue_gray-400 h-[5px] sm:mt-0 my-[7px] rounded-sm w-[5px]"></div>
                <Text
                  className="text-base text-blue_gray-400"
                  size="txtDMSansMedium16Bluegray400"
                >
                  Swelling in one of your ureters, called ureterocele
                </Text>
              </div>
              <div className="flex md:flex-col flex-row font-dmsans gap-[5px] items-start justify-start mt-2.5 w-[97%] md:w-full">
                <div className="bg-blue_gray-400 h-[5px] mb-7 md:mt-0 mt-[9px] rounded-sm w-1"></div>
                <Text
                  className="text-base text-blue_gray-400 w-[99%] sm:w-full"
                  size="txtDMSansMedium16Bluegray400"
                >
                  Hyperparathyroidism (excessive production of the parathyroid
                  hormone by the parathyroid glands)
                </Text>
              </div>
              <Text
                className="mt-[21px] text-blue_gray-900 text-xl"
                size="txtFredokaMedium20Bluegray900"
              >
                Symptoms:
              </Text>
              <Text
                className="leading-[139.88%] mt-[13px] text-base text-blue_gray-400 w-full"
                size="txtDMSansRegular16Bluegray400"
              >
                People often associate kidney and ureteral stones with pain.
                However, symptoms can vary from severe pain to no pain at all,
                depending on stone characteristics – such as the size, shape,
                and location of the stone in the urinary tract. Severe pain
                (renal colic). If the stone blocks the normal urine flow through
                the ureter you will experience severe pain, known as renal
                colic. This is a sharp pain in the loin and the flank (the side
                of your body, from the ribs to the hip). If the stone is not in
                your kidney but in your ureter, you may feel pain in the groin
                or thigh. Men can also have pain in their testicles Other
                symptoms that may accompany renal colic are:
              </Text>
              <div className="flex flex-row font-dmsans gap-[37px] items-start justify-start mt-[13px] w-[45%] md:w-full">
                <div className="flex flex-col items-start justify-start w-[46%]">
                  <div className="flex flex-row gap-1.5 items-center justify-start w-[48%] md:w-full">
                    <div className="bg-indigo-300 h-[5px] my-2 rounded-sm w-[5px]"></div>
                    <Text
                      className="text-base text-indigo-300"
                      size="txtDMSansMedium16"
                    >
                      Nausea
                    </Text>
                  </div>
                  <div className="flex flex-row gap-1.5 items-center justify-start mt-[13px] w-[55%] md:w-full">
                    <div className="bg-indigo-300 h-[5px] my-[7px] rounded-sm w-[5px]"></div>
                    <Text
                      className="text-base text-indigo-300"
                      size="txtDMSansMedium16"
                    >
                      Vomiting
                    </Text>
                  </div>
                  <div className="flex flex-row gap-1.5 items-center justify-start mt-2.5 w-full">
                    <div className="bg-indigo-300 h-[5px] mb-1.5 mt-[9px] rounded-sm w-[5px]"></div>
                    <Text
                      className="text-base text-indigo-300"
                      size="txtDMSansMedium16"
                    >
                      Blood in the urine
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col gap-3 items-start justify-start w-[43%]">
                  <div className="flex flex-row gap-1.5 items-center justify-start w-full">
                    <div className="bg-indigo-300 h-[5px] mb-1.5 mt-[9px] rounded-sm w-[5px]"></div>
                    <Text
                      className="text-base text-indigo-300"
                      size="txtDMSansMedium16"
                    >
                      Painful urination
                    </Text>
                  </div>
                  <div className="flex flex-row gap-1.5 items-center justify-start w-2/5 md:w-full">
                    <div className="bg-indigo-300 h-[5px] my-2 rounded-sm w-[5px]"></div>
                    <Text
                      className="text-base text-indigo-300"
                      size="txtDMSansMedium16"
                    >
                      Fever
                    </Text>
                  </div>
                </div>
              </div>
              <Text
                className="leading-[139.88%] mt-4 text-base text-blue_gray-400 w-full"
                size="txtDMSansRegular16Bluegray400"
              >
                Renal colic is an emergency situation and you should contact
                your family doctor or nearest hospital to relieve the pain. In
                case of high fever you must seek medical help immediately.
              </Text>
              <Text
                className="leading-[139.88%] mt-[11px] text-base text-blue_gray-400 w-full"
                size="txtDMSansRegular16Bluegray400"
              >
                Stones can also cause a recurrent, dull pain in the flank. This
                kind of pain may be a symptom of other diseases as well, so you
                will need to take medical tests to find out if you have kidney
                or ureteral stones.
              </Text>
              <Text
                className="leading-[139.88%] mt-2.5 text-base text-blue_gray-400 w-full"
                size="txtDMSansRegular16Bluegray400"
              >
                Some stones do not cause any discomfort. These are called
                asymptomatic stones and are usually small. They do not block the
                flow of urine because they are located in the lower part of the
                kidney or attached to the ureteral wall. In general asymptomatic
                stones are found during x-ray or similar imaging procedures for
                other conditions.
              </Text>
              <List
                className="flex flex-col font-fredoka gap-[21px] items-center mt-5 w-full"
                orientation="vertical"
              >
                <div className="flex flex-1 flex-col gap-[13px] items-start justify-start w-full">
                  <Text
                    className="text-blue_gray-900 text-xl"
                    size="txtFredokaMedium20Bluegray900"
                  >
                    Kidney Stones Diagnosis and Testing :
                  </Text>
                  <Text
                    className="leading-[139.88%] text-base text-blue_gray-400 w-full"
                    size="txtDMSansRegular16Bluegray400"
                  >
                    If your doctor observes the symptoms related to kidney
                    stones problems, he/she may advise you a few diagnostic
                    tests and procedures such as following:
                  </Text>
                  <div className="flex md:flex-col flex-row font-dmsans gap-1.5 items-start justify-start w-full">
                    <div className="bg-blue_gray-400 h-[5px] mb-7 md:mt-0 mt-[9px] rounded-sm w-[5px]"></div>
                    <Text
                      className="sm:flex-1 text-base text-blue_gray-400 w-[99%] sm:w-full"
                      size="txtDMSansMedium16Bluegray400"
                    >
                      Blood Tests : These tests inform about the presence of too
                      much calcium or uric acid in your blood. It helps doctors
                      to check the health of your kidney.
                    </Text>
                  </div>
                  <div className="flex md:flex-col flex-row font-dmsans gap-1.5 items-start justify-start w-full">
                    <div className="bg-blue_gray-400 h-[5px] mb-7 md:mt-0 mt-[9px] rounded-sm w-[5px]"></div>
                    <Text
                      className="sm:flex-1 text-base text-blue_gray-900 w-[99%] sm:w-full"
                      size="txtDMSansMedium16Bluegray900"
                    >
                      <span className="text-blue_gray-900 font-dmsans text-left font-medium">
                        Urine Testing :
                      </span>
                      <span className="text-blue_gray-400 font-dmsans text-left font-medium">
                        {" "}
                      </span>
                      <span className="text-blue_gray-400 font-dmsans text-left font-medium">
                        Doctor may advise you to have two urine collections for
                        two consecutive days to assess the amount of stone
                        forming minerals present in your urine.
                      </span>
                    </Text>
                  </div>
                  <div className="flex md:flex-col flex-row font-dmsans gap-1.5 items-start justify-start w-full">
                    <div className="bg-blue_gray-400 h-[5px] mb-[70px] md:mt-0 mt-[9px] rounded-sm w-[5px]"></div>
                    <Text
                      className="sm:flex-1 text-base text-blue_gray-900 w-[99%] sm:w-full"
                      size="txtDMSansMedium16Bluegray900"
                    >
                      <span className="text-blue_gray-900 font-dmsans text-left font-medium">
                        Imaging :{" "}
                      </span>
                      <span className="text-blue_gray-400 font-dmsans text-left font-medium">
                        Imaging tests may include simple abdominal X-rays, CT
                        Scan and ultrasound to reveal the presence of kidney
                        stones in your urinary tract. One advanced test is
                        intravenous urography where a dye is injected into an
                        arm vein and x-rays or CT images are taken as dye
                        travels through kidney and bladder.
                      </span>
                    </Text>
                  </div>
                  <div className="flex md:flex-col flex-row font-dmsans gap-1.5 items-start justify-start w-full">
                    <div className="bg-blue_gray-400 h-[5px] mb-7 md:mt-0 mt-[9px] rounded-sm w-[5px]"></div>
                    <Text
                      className="sm:flex-1 text-base text-blue_gray-900 w-[99%] sm:w-full"
                      size="txtDMSansMedium16Bluegray900"
                    >
                      <span className="text-blue_gray-900 font-dmsans text-left font-medium">
                        Analyzing passed Kidney Stones :{" "}
                      </span>
                      <span className="text-blue_gray-400 font-dmsans text-left font-medium">
                        You will pass urine through a strainer so kidney stones
                        passing through urine can be collected and analyzed in a
                        lab.
                      </span>
                    </Text>
                  </div>
                </div>
                <div className="flex md:flex-1 flex-col items-start justify-start w-[54%] md:w-full">
                  <Text
                    className="text-blue_gray-900 text-xl"
                    size="txtFredokaMedium20Bluegray900"
                  >
                    Treatment of Kidney and Ureteral Stones:
                  </Text>
                  <div className="flex flex-row font-dmsans gap-1.5 items-center justify-start mt-3.5 w-1/4 md:w-full">
                    <div className="bg-indigo-300 h-[5px] my-[7px] rounded-sm w-[5px]"></div>
                    <Text
                      className="text-base text-indigo-300"
                      size="txtDMSansMedium16"
                    >
                      Symptoms
                    </Text>
                  </div>
                  <div className="flex flex-row font-dmsans gap-1.5 items-center justify-start mt-2.5 w-[47%] md:w-full">
                    <div className="bg-indigo-300 h-[5px] mb-1.5 mt-[9px] rounded-sm w-[5px]"></div>
                    <Text
                      className="text-base text-indigo-300"
                      size="txtDMSansMedium16"
                    >
                      Stone characteristics
                    </Text>
                  </div>
                  <div className="flex flex-row font-dmsans gap-1.5 items-center justify-start mt-[13px] w-[56%] md:w-full">
                    <div className="bg-indigo-300 h-[5px] my-[7px] rounded-sm w-[5px]"></div>
                    <Text
                      className="text-base text-indigo-300"
                      size="txtDMSansMedium16"
                    >
                      Medical history of patient
                    </Text>
                  </div>
                  <div className="flex flex-row font-dmsans gap-1.5 items-center justify-start mt-3 w-[85%] md:w-full">
                    <div className="bg-indigo-300 h-[5px] my-[7px] rounded-sm w-[5px]"></div>
                    <Text
                      className="text-base text-indigo-300"
                      size="txtDMSansMedium16"
                    >
                      Patient personal preferences and values
                    </Text>
                  </div>
                </div>
              </List>
              <Text
                className="leading-[139.88%] mt-2.5 text-base text-blue_gray-400 w-full"
                size="txtDMSansRegular16Bluegray400"
              >
                Not all stones require treatment. You need treatment if your
                stone causes discomfort and does not pass naturally with urine.
                Doctor may also advise treatment if you have pre-existing
                medical conditions.
              </Text>
              <Text
                className="leading-[139.88%] mt-2.5 text-base text-blue_gray-400 w-full"
                size="txtDMSansRegular16Bluegray400"
              >
                If you have a kidney or ureteral stone which does not cause
                discomfort, you will generally not receive treatment. Your
                doctor will give you a time schedule for regular control visits
                to make sure your condition does not get worse.
              </Text>
              <Text
                className="leading-[139.88%] mt-2.5 text-base text-blue_gray-400 w-full"
                size="txtDMSansRegular16Bluegray400"
              >
                Conservative stone treatment If your stone is likely to pass
                with urine, your doctor can prescribe drugs to ease this
                process. This is called conservative treatment.
              </Text>
              <Text
                className="leading-[139.88%] mt-[11px] text-base text-blue_gray-400 w-full"
                size="txtDMSansRegular16Bluegray400"
              >
                If your stone continues to grow or causes frequent and severe
                pain, you will get active treatment.
              </Text>
            </div>
            <div className="flex flex-col justify-start w-2/5 md:w-full">
              <div className="bg-indigo-50_01 flex flex-col items-start justify-center mr-[105px] p-5 rounded-[24px] w-4/5 md:w-full">
                <Text
                  className="mt-[11px] text-2xl md:text-[22px] text-blue_gray-700 sm:text-xl"
                  size="txtFredokaMedium24Bluegray700"
                >
                  Medical Services
                </Text>
                <Input
                  name="group1171275190"
                  placeholder="Kidney Stone"
                  className="font-medium leading-[normal] p-0 placeholder:text-blue_gray-900 text-left text-xl w-full"
                  wrapClassName="flex mt-[23px] rounded-[12px] w-full"
                  suffix={
                    <div className="h-8 ml-[35px] w-8 bg-blue_gray-700 p-[5px] rounded-[50%] flex justify-center items-center">
                      <Img
                        className="h-[21px] my-auto"
                        src="images/img_upload.svg"
                        alt="upload"
                      />
                    </div>
                  }
                  shape="round"
                  color="white_A700"
                  size="lg"
                  variant="fill"
                ></Input>
                <Input
                  name="group1171275207"
                  placeholder="Prostate"
                  className="font-medium leading-[normal] p-0 placeholder:text-blue_gray-900 text-left text-xl w-full"
                  wrapClassName="flex mt-5 rounded-[12px] w-full"
                  suffix={
                    <div className="h-8 ml-[35px] w-8 bg-blue_gray-700 p-[5px] rounded-[50%] flex justify-center items-center">
                      <Img
                        className="h-[21px] my-auto"
                        src="images/img_upload.svg"
                        alt="upload"
                      />
                    </div>
                  }
                  shape="round"
                  color="white_A700"
                  size="lg"
                  variant="fill"
                ></Input>
                <Input
                  name="group1171275208"
                  placeholder="Uro Oncology"
                  className="font-medium leading-[normal] p-0 placeholder:text-blue_gray-900 text-left text-xl w-full"
                  wrapClassName="flex mt-5 rounded-[12px] w-full"
                  suffix={
                    <div className="h-8 ml-[35px] w-8 bg-blue_gray-700 p-[5px] rounded-[50%] flex justify-center items-center">
                      <Img
                        className="h-[21px] my-auto"
                        src="images/img_upload.svg"
                        alt="upload"
                      />
                    </div>
                  }
                  shape="round"
                  color="white_A700"
                  size="lg"
                  variant="fill"
                ></Input>
                <Input
                  name="group1171275209"
                  placeholder="Paediatric Urology"
                  className="font-medium leading-[normal] p-0 placeholder:text-blue_gray-900 text-left text-xl w-full"
                  wrapClassName="flex mt-5 rounded-[12px] w-full"
                  suffix={
                    <div className="h-8 ml-[35px] w-8 bg-blue_gray-700 p-[5px] rounded-[50%] flex justify-center items-center">
                      <Img
                        className="h-[21px] my-auto"
                        src="images/img_upload.svg"
                        alt="upload"
                      />
                    </div>
                  }
                  shape="round"
                  color="white_A700"
                  size="lg"
                  variant="fill"
                ></Input>
                <Input
                  name="gender"
                  placeholder="Female Urology"
                  className="font-medium leading-[normal] p-0 placeholder:text-blue_gray-900 text-left text-xl w-full"
                  wrapClassName="flex mt-5 rounded-[12px] w-full"
                  suffix={
                    <div className="h-8 ml-[35px] w-8 bg-blue_gray-700 p-[5px] rounded-[50%] flex justify-center items-center">
                      <Img
                        className="h-[21px] my-auto"
                        src="images/img_upload.svg"
                        alt="upload"
                      />
                    </div>
                  }
                  shape="round"
                  color="white_A700"
                  size="lg"
                  variant="fill"
                ></Input>
                <Input
                  name="group1171275211"
                  placeholder="Reconstructive Urology"
                  className="font-medium leading-[normal] p-0 placeholder:text-blue_gray-900 text-left text-xl w-full"
                  wrapClassName="flex mb-3 mt-5 rounded-[12px] w-full"
                  suffix={
                    <div className="h-8 ml-[35px] w-8 bg-blue_gray-700 p-[5px] rounded-[50%] flex justify-center items-center">
                      <Img
                        className="h-[21px] my-auto"
                        src="images/img_upload.svg"
                        alt="upload"
                      />
                    </div>
                  }
                  shape="round"
                  color="white_A700"
                  size="lg"
                  variant="fill"
                ></Input>
              </div>
              <div className="flex flex-col items-center justify-start md:ml-[0] ml-[296px] mt-[211px] w-[42%] md:w-full">
                <Img
                  className="h-[185px] md:h-auto object-cover w-full"
                  src="images/img_handholdsmedi_185x210.png"
                  alt="handholdsmedi"
                />
              </div>
              <Img
                className="h-[118px] md:h-auto md:ml-[0] ml-[110px] mt-[892px] object-cover w-[26%]"
                src="images/img_m028t0135amed_118x131.png"
                alt="m028t0135amed"
              />
            </div>
          </div>
          <div className="flex flex-col md:gap-10 gap-[118px] justify-start mt-5 w-full">
            <div className="flex flex-col items-start justify-start ml-32 md:ml-[0] md:px-5 w-[36%] md:w-full">
              <Text
                className="text-blue_gray-900 text-xl"
                size="txtFredokaMedium20Bluegray900"
              >
                Surgical Treatment
              </Text>
              <div className="flex flex-row font-dmsans gap-1.5 items-center justify-start mt-[15px] w-[48%] md:w-full">
                <div className="bg-blue_gray-400 h-[5px] my-[7px] rounded-sm w-[5px]"></div>
                <Text
                  className="text-base text-blue_gray-400"
                  size="txtDMSansMedium16Bluegray400"
                >
                  ESWL – shock-wave lithotripsy
                </Text>
              </div>
              <div className="flex flex-row font-dmsans gap-1.5 items-center justify-start mt-3 w-[32%] md:w-full">
                <div className="bg-blue_gray-400 h-[5px] my-[7px] rounded-sm w-[5px]"></div>
                <Text
                  className="text-base text-blue_gray-400"
                  size="txtDMSansMedium16Bluegray400"
                >
                  URS – Ureteroscopy
                </Text>
              </div>
              <div className="flex flex-row font-dmsans gap-1.5 items-center justify-start mt-[11px] w-3/5 md:w-full">
                <div className="bg-blue_gray-400 h-[5px] my-[7px] rounded-sm w-[5px]"></div>
                <Text
                  className="text-base text-blue_gray-400"
                  size="txtDMSansMedium16Bluegray400"
                >
                  PCNL – Percutaneous nephrolithotomy
                </Text>
              </div>
              <div className="flex flex-row font-dmsans gap-1.5 items-center justify-start mt-2.5 w-[61%] md:w-full">
                <div className="bg-blue_gray-400 h-[5px] my-[7px] rounded-sm w-[5px]"></div>
                <Text
                  className="text-base text-blue_gray-400"
                  size="txtDMSansMedium16Bluegray400"
                >
                  MINIPERC/ULTRAMINIPERC/MICROPERC
                </Text>
              </div>
              <div className="flex sm:flex-col flex-row font-dmsans gap-1.5 items-center justify-start mt-[13px] w-full">
                <div className="bg-blue_gray-400 h-[5px] sm:mt-0 my-[7px] rounded-sm w-[5px]"></div>
                <Text
                  className="text-base text-blue_gray-400"
                  size="txtDMSansMedium16Bluegray400"
                >
                  RIRS – Retrograde intrarenal surgery – THE LATEST LASER METHOD
                </Text>
              </div>
            </div>
            <div className="bg-gray-100 flex flex-col items-center justify-end p-8 sm:px-5 w-full">
              <div className="flex flex-col items-center justify-start max-w-[1184px] mt-[57px] mx-auto md:px-5 w-full">
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[64%] md:w-full">
                  <div className="bg-red-A400 border border-solid border-white-A700 h-[18px] mb-[46px] md:mt-0 mt-[13px] rounded-[50%] w-[18px]"></div>
                  <div className="flex flex-col gap-2 items-center justify-start md:ml-[0] ml-[254px]">
                    <Text
                      className="text-base text-indigo-300 tracking-[3.00px] uppercase"
                      size="txtFredokaMedium16"
                    >
                      services
                    </Text>
                    <Text
                      className="sm:text-4xl md:text-[38px] text-[40px] text-blue_gray-900 text-center"
                      size="txtFredokaMedium40"
                    >
                      Treatments
                    </Text>
                  </div>
                  <Img
                    className="h-[41px] md:ml-[0] ml-[226px] md:mt-0 mt-2.5 w-[42px]"
                    src="images/img_cut.svg"
                    alt="cut"
                  />
                </div>
                <List
                  className="sm:flex-col flex-row gap-[21px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center mt-[49px] w-full"
                  orientation="horizontal"
                >
                  <div className="bg-indigo-50_02 flex flex-1 flex-col gap-[21px] items-center justify-end p-[21px] sm:px-5 rounded-[12px] w-full">
                    <div className="h-[281px] md:h-[283px] mt-0.5 relative w-[99%]">
                      <Img
                        className="h-[281px] m-auto object-cover rounded-[12px] w-full"
                        src="images/img_rectangle4359.png"
                        alt="rectangle4359"
                      />
                      <Button
                        className="absolute flex h-[38px] items-center justify-center right-[7%] top-[9%] w-[38px]"
                        shape="circle"
                        color="white_A700"
                        size="sm"
                        variant="fill"
                      >
                        <Img
                          className="h-[25px]"
                          src="images/img_maximize.svg"
                          alt="maximize"
                        />
                      </Button>
                    </div>
                    <Text
                      className="text-blue_gray-900 text-xl"
                      size="txtFredokaMedium20Bluegray900"
                    >
                      URS – Ureteroscopy
                    </Text>
                  </div>
                  <div className="bg-indigo-50_02 flex flex-1 flex-col gap-[21px] items-center justify-end p-[21px] sm:px-5 rounded-[12px] w-full">
                    <div className="h-[281px] md:h-[283px] mt-0.5 relative w-[99%]">
                      <Img
                        className="h-[281px] m-auto object-cover rounded-[12px] w-full"
                        src="images/img_rectangle4359_281x333.png"
                        alt="rectangle4359"
                      />
                      <Button
                        className="absolute flex h-[38px] items-center justify-center right-[7%] top-[9%] w-[38px]"
                        shape="circle"
                        color="white_A700"
                        size="sm"
                        variant="fill"
                      >
                        <Img
                          className="h-[25px]"
                          src="images/img_maximize.svg"
                          alt="maximize"
                        />
                      </Button>
                    </div>
                    <Text
                      className="text-blue_gray-900 text-xl"
                      size="txtFredokaMedium20Bluegray900"
                    >
                      Retrograde Intrarenal Surgery
                    </Text>
                  </div>
                  <div className="bg-indigo-50_02 flex flex-1 flex-col gap-[19px] items-center justify-end p-[23px] sm:px-5 rounded-[12px] w-full">
                    <div className="h-[281px] relative w-full">
                      <Img
                        className="h-[281px] m-auto object-cover rounded-[12px] w-full"
                        src="images/img_rectangle4359_1.png"
                        alt="rectangle4359"
                      />
                      <Button
                        className="absolute flex h-[38px] items-center justify-center right-[7%] top-[9%] w-[38px]"
                        shape="circle"
                        color="white_A700"
                        size="sm"
                        variant="fill"
                      >
                        <Img
                          className="h-[25px]"
                          src="images/img_maximize.svg"
                          alt="maximize"
                        />
                      </Button>
                    </div>
                    <Text
                      className="text-blue_gray-900 text-xl"
                      size="txtFredokaMedium20Bluegray900"
                    >
                      ESWL
                    </Text>
                  </div>
                </List>
                <div className="bg-amber-500 border border-black-900 border-solid h-4 mt-[42px] rounded-[50%] w-4"></div>
              </div>
            </div>
          </div>
          <div className="bg-blue_gray-700 flex flex-col items-center justify-start max-w-[1184px] mt-[120px] mx-auto pl-0.5 md:px-5 rounded-[20px] w-full">
            <div
              className="bg-cover bg-no-repeat flex md:flex-col flex-row md:gap-5 h-[330px] items-start justify-end p-[9px] w-full"
              style={{ backgroundImage: "url('images/img_group37.svg')" }}
            >
              <div className="bg-gradient1  h-[15px] md:mt-0 mt-[33px] rounded-[7px] w-[15px]"></div>
              <div className="bg-gradient1  h-5 md:ml-[0] ml-[78px] md:mt-0 mt-[243px] rounded-[50%] w-5"></div>
              <div className="h-[244px] md:h-[277px] sm:h-[388px] md:ml-[0] ml-[113px] md:mt-0 my-[33px] relative w-[47%] md:w-full">
                <div className="bg-gradient1  h-[25px] ml-[73px] rounded-[12px] w-[25px]"></div>
                <div className="absolute flex flex-col gap-[22px] h-full inset-[0] items-center justify-center m-auto w-full">
                  <Text
                    className="sm:text-[40px] md:text-[46px] text-[50px] text-center text-white-A700"
                    size="txtFredokaMedium50"
                  >
                    Newsletter
                  </Text>
                  <div className="flex flex-col gap-7 items-center justify-start w-full">
                    <div className="flex flex-col gap-[9px] items-center justify-start w-full">
                      <Text
                        className="text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl"
                        size="txtFredokaMedium24WhiteA700"
                      >
                        Get Smarter About No-Code
                      </Text>
                      <div className="flex sm:flex-col flex-row font-dmsans gap-1.5 items-start justify-between w-full">
                        <Img
                          className="h-4 mb-[25px] w-4"
                          src="images/img_star13_3.svg"
                          alt="starThirteen"
                        />
                        <div className="h-[42px] relative w-[96%] sm:w-full">
                          <Text
                            className="m-auto text-base text-blue_gray-200 text-center w-full"
                            size="txtDMSansRegular16"
                          >
                            The best No-Code tips & tricks, for webflow & Framer
                            developers from experts to beginner. Join our 3k
                            community by subscribing
                          </Text>
                          <Img
                            className="absolute bottom-[5%] h-4 right-[4%] w-4"
                            src="images/img_star14_8.svg"
                            alt="starFourteen"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex sm:flex-col flex-row font-dmsans gap-3 items-center justify-start w-[85%] md:w-full">
                      <Input
                        name="language"
                        placeholder="Enter your email "
                        className="leading-[normal] p-0 placeholder:text-blue_gray-200 text-center text-sm w-full"
                        wrapClassName="border border-solid border-white-A700_66 w-[65%] sm:w-full"
                        type="email"
                        shape="round"
                        color="blue_gray_600"
                        size="md"
                        variant="fill"
                      ></Input>
                      <Button
                        className="cursor-pointer font-medium leading-[normal] min-w-[149px] text-center text-lg"
                        shape="round"
                        color="white_A700"
                        size="md"
                        variant="fill"
                      >
                        Subscribe
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient1  h-[34px] md:ml-[0] ml-[126px] md:mt-0 mt-56 rounded-[50%] w-[34px]"></div>
              <div className="bg-gradient1  h-[53px] md:ml-[0] ml-[102px] md:mt-0 mt-28 rounded-[26px] w-[53px]"></div>
            </div>
          </div>
          <Footer className="bg-blue_gray-900 flex items-center justify-center mt-[120px] md:px-5 w-full" />
          <Img
            className="h-[47px] mt-[864px]"
            src="images/img_group_1.svg"
            alt="group"
          />
        </div>
      </div>
    </>
  );
};

export default MedicalServicesdetailPage;
