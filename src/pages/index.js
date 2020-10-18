import React from "react";
import theme from "theme";
import { Theme, Box, Text, Icon, Link, Image } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { Override, Section, StackItem, Stack } from "@quarkly/components";
import * as Components from "components";
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";
import { FaPlay } from "react-icons/fa";
export default (() => {
	return <Theme theme={theme}>
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section
			position="fixed"
			background="#FFF"
			top="0px"
			z-index="2000"
			noutLg-display="flex"
			display="flex"
		>
			<Override slot="SectionContent" flex-direction="row" width="1045px" noutLg-width="89%" />
			<Box
				width="25%"
				display="flex"
				nout-margin="0 0 0 40px"
				sm-margin="0 0 0 px"
				lg-width="10%"
				lg-margin="0 0 0 0px"
				md-width="25%"
			>
				<Components.LogoHeader sm-margin="0px 0px 0px 0px" />
			</Box>
			<Box
				width="70%"
				display="flex"
				position="relative"
				justify-content="flex-end"
				noutLg-margin="0px 40px 0px 0px"
				margin="0 40px 0 0px"
				lg-width="90%"
			>
				<Box display="none" md-display="block" sm-display="flex" sm-align-items="center">
					<Components.Burger />
				</Box>
				<Box
					display="flex"
					position="relative"
					margin="0px 20px 0px 20px"
					align-items="center"
					hover-color="--buttonBlue"
					md-display="none"
				>
					<Link
						href="#"
						font="400 16px/24px --fontFamily-googleUbuntu"
						color="--textMain"
						text-decoration-line="initial"
						hover-color="--buttonBlue"
					>
						<Box display="flex" align-items="center" hover-color="--buttonBlue">
							<Text font="400 16px/24px --fontFamily-googleUbuntu" color="--textMain" hover-color="--buttonBlue">
								Product{" "}
							</Text>
							<Icon
								size="24px"
								category="md"
								icon={MdKeyboardArrowDown}
								color="--textMain"
								padding="0px 0px 0px 0px"
							/>
						</Box>
					</Link>
				</Box>
				<Box
					display="flex"
					position="relative"
					margin="0px 20px 0px 20px"
					align-items="center"
					md-display="none"
				>
					<Link
						href="#"
						font="400 16px/24px --fontFamily-googleUbuntu"
						color="--textMain"
						text-decoration-line="initial"
						hover-color="--buttonBlue"
					>
						Pricing
					</Link>
				</Box>
				<Box
					display="flex"
					position="relative"
					margin="0px 20px 0px 20px"
					align-items="center"
					md-display="none"
				>
					<Link
						href="#"
						font="400 16px/24px --fontFamily-googleUbuntu"
						color="--textMain"
						text-decoration-line="initial"
						hover-color="--buttonBlue"
					>
						Learn
					</Link>
					<Icon
						size="24px"
						category="md"
						icon={MdKeyboardArrowDown}
						color="--textMain"
						padding="0px 0px 0px 0px"
					/>
				</Box>
				<Box
					display="flex"
					position="relative"
					margin="0px 20px 0px 20px"
					align-items="center"
					md-display="none"
				>
					<Link
						href="#"
						font="500 16px/24px --fontFamily-googleUbuntu"
						color="--dark"
						text-decoration-line="initial"
						hover-color="--buttonBlue"
					>
						Login
					</Link>
				</Box>
				<Box
					display="flex"
					position="relative"
					margin="0px 0px 0px 20px"
					align-items="center"
					md-display="none"
				>
					<Link
						href="#"
						font="400 16px/24px --fontFamily-googleUbuntu"
						color="#FFF"
						text-decoration-line="initial"
						background="#3505ff"
						padding="14px 20px 14px 20px"
						border-radius="4px"
						hover-background="rgba(53, 5, 255, 0.87)"
					>
						Get Started
					</Link>
				</Box>
			</Box>
		</Section>
		<Section>
			<Box
				display="flex"
				width="100%"
				margin="200px 0px 0px 0px"
				nout-margin="120px 0px 0px 0px"
				md-flex-direction="column"
			>
				<Box
					width="40%"
					margin="0 0 0 110px"
					padding="0px 80px 0 0px"
					nout-margin="0 0 0 0px"
					nout-padding="0px 30px 0 0px"
					lg-width="50%"
					md-width="90%"
					noutLg-margin="0 0 0 0px"
				>
					<Text
						font="700 50px/57px --fontFamily-googleUbuntu"
						margin="0 0 16px 0"
						color="#152335"
						lg-margin="40px 0 16px 0"
						sm-width="100%"
						sm-margin="10px 0 16px 0"
						sm-font="700 40px/55px --fontFamily-googleUbuntu"
					>
						Unlock culture with ongoing recognition and feedback.
					</Text>
					<Text font="20px/32px --fontFamily-googleUbuntu" margin="0 0 24px 0" display="block" color="--textMain">
						Hi5 helps managers get rich insights about team culture on a dashboard. 
Team members use a fun app to give feedback and recognition to peers.
					</Text>
					<Components.CustomLink />
					<Text font="14px/22px --fontFamily-googleUbuntu" color="#3e5267" margin="12px 0px 0 0px">
						🎉 Simple, fast and no credit card needed.
					</Text>
				</Box>
				<Box
					width="50%"
					padding="0 50px 0 0px"
					nout-padding="0 0 0 0px"
					nout-width="60%"
					lg-width="60%"
					md-width="100%"
					md-display="flex"
					md-justify-content="center"
					noutLg-padding="0 0px 0 0px"
				>
					<Image
						height="auto"
						src="https://uploads.quarkly.io/5f86f0e33d84d4001ec39aec/images/5cee415cafec5ef4e3c73b6d_Hi5%20Hero%20image.png?v=2020-10-14T16:54:23.199Z"
						width="100%"
						lg-width="110%"
						lg-height="auto"
						md-width="80%"
						sm-width="70%"
						lg-padding="80px 8px 0px 8px"
						lg-margin="80px 8 8 8"
						md-margin="30px 0px 0px 0px"
						md-padding="0 8px 0px 8px"
					/>
				</Box>
			</Box>
		</Section>
		<Section
			background="--color-bgYellow"
			transform="skew(0deg,-5deg)"
			height="30vh"
			margin="20px 0 51px 0"
			justify-content="center"
			align-items="center"
			position="relative"
			z-index="0"
			nout-top="-90px"
			lg-z-index="-1"
			lg-top="30px"
			lg-margin="0px 0 50px 0"
			md-margin="-30px 0 50px 0"
			nout-margin="99.9px 0 51px 0"
			lg-height="35vh"
			sm-height="25vh"
		>
			<Override slot="SectionContent" width="1045px" lg-top="1px" />
		</Section>
		<Section
			background="--color-bgYellow"
			margin="-300px 0 0 0"
			position="relative"
			z-index="1"
			nout-margin="-300px 0 0 0"
			lg-margin="-200px 0 0 0"
			md-margin="-100px 0 0 0"
			noutLg-margin="-200px 0 0 0"
			sm-margin="-50px 0 0 0"
		>
			<Override slot="SectionContent" max-width="1045px" />
			<Stack flex-direction="column" align-items="center">
				{"    "}
				<StackItem
					width="100%"
					display="flex"
					margin="0 0 20px 0"
					lg-margin="0px 0 80px 0"
					nout-margin="0 0 100px 0"
				>
					<Override slot="StackItemContent" justify-content="center" />
					{"        "}
					<Text
						font="normal 700 45px/60px --fontFamily-googleUbuntu"
						margin="0px 0px 70px 0px"
						display="inline-block"
						nout-color="--dark"
						nout-margin="0px 0px 0px 0px"
						sm-font="normal 700 32px/42px --fontFamily-googleUbuntu"
					>
						What does Hi5 do?
					</Text>
					{"    "}
				</StackItem>
				<StackItem
					width="74%"
					display="flex"
					justify-content="center"
					position="relative"
					padding="0px 0px 0 0px"
					margin="0 0 90px 0"
					height="auto"
					nout-width="83%"
					md-width="100%"
				>
					<Override slot="StackItemContent" justify-content="center" />
					<Box
						width="100%"
						height="430px"
						display="flex"
						position="relative"
						sm-margin="0 0 -200px 0"
					>
						<Image
							width="50%"
							src="https://uploads-ssl.webflow.com/5b34885067f597307b210eed/5ceda7aac61ed27840d6f335_lines%202.png"
							border-radius="3px"
							position="absolute"
							bottom="-5%"
							left="-3%"
							z-index="5"
							sm-bottom="auto"
							sm-height="224.667px"
							sm-left="-18px"
							sm-right="auto"
							sm-top="95px"
						/>
						<Components.EmbedHTML
							quarkly-title="Hi5Video"
							width="100%"
							height="100%"
							position="relative"
							z-index="10"
							sm-height="70%"
							sm-width="100%"
						/>
						<Image
							width="50%"
							height="auto"
							src="https://uploads-ssl.webflow.com/5b34885067f597307b210eed/5ce57ea68cd2e9dd64e13929_Blue%20Square%20Graphic.svg"
							position="absolute"
							right="-3%"
							top="-4%"
							z-index="5"
						/>
					</Box>
				</StackItem>
				{"    "}
				<StackItem width="100%" display="flex" margin="20px 0px 80px 0px" nout-margin="20px 0px 0px 0px">
					<Override
						slot="StackItemContent"
						max-width="1045px"
						width="100%"
						justify-content="center"
						nout-margin="0px 0px 0px 0px"
					/>
					{"        "}
					<Text
						font="--h2"
						margin="0px 0px 0px 0px"
						display="inline-block"
						width=" 90%"
						text-align="center"
						nout-margin="0px 0px 60px 0px"
						sm-color="#152335"
						sm-font="700 32px/46px Ubuntu, sans-serif"
					>
						What customers ❤️ about Hi5
					</Text>
					{"    "}
				</StackItem>
				<StackItem width="100%" display="flex">
					<Override slot="StackItemContent" max-width="1045px" width="100%" justify-content="center" />
					<Stack width="100%" nout-width="105%">
						{"    "}
						<StackItem
							width="33%"
							display="flex"
							nout-margin="0 0 0 5"
							md-width="50%"
							sm-width="100%"
						>
							{"        "}
							<Box
								width="100%"
								display="flex"
								flex-direction="column"
								align-items="center"
								justify-content="space-between"
								nout-margin="0 0 0 0pxpx"
							>
								<Link
									href="#"
									display="flex"
									width="300px"
									height="230px"
									background="url(https://uploads-ssl.webflow.com/5b34885067f597307b210eed/5cee75bc396444195e249d88_Wayne%20Flemming%20BrandTruth.png) 0% 0%/100% 100% repeat-x"
									border-radius="4px"
									box-shadow="rgba(0, 0, 0, 0.2) 0px 3px 8px 0px"
									transition="transform .3s ease-in-out,-webkit-transform .3s ease-in-out"
									hover-transform="translate(0,-2px)"
									hover-box-shadow="0 3px 8px 0 rgba(0,0,0,.3)"
									align-items="center"
									justify-content="center"
									margin="0 0 21px 0"
								>
									<Icon
										category="fa"
										icon={FaPlay}
										color="#FFF"
										size="24px"
										width="90px"
										height="60px"
										background="--color-buttonBlue"
									/>
								</Link>
								<Text font="normal 14px/24px Ubuntu" color="rgb(21, 35, 53)" text-align="center" margin="0px 0px 0px 0px">
									Wayne Flemming. MD{" "}
									<br />
									BrandTruth
								</Text>
								<Text
									font="normal 500 19px/26.6px Ubuntu"
									color="rgb(21, 35, 53)"
									text-align="center"
									width="85%"
									margin="10px 1px 1px 1px"
								>
									"Hi5 gives everyone accountability and responsibility to contribute to our culture and also achieving their goals."
								</Text>
								<Image width="130px" height="auto" src="https://uploads-ssl.webflow.com/5b34885067f597307b210eed/5ced8e37e2e059ddd0ddb496_Client%205%20(1).png" margin="28px 0px 0px 0px" />
							</Box>
							{"    "}
						</StackItem>
						<StackItem width="33%" display="flex" md-width="50%" sm-display="none">
							{"        "}
							<Box
								width="100%"
								display="flex"
								flex-direction="column"
								align-items="center"
								justify-content="space-between"
							>
								<Link
									href="#"
									display="flex"
									width="300px"
									height="230px"
									background="url(https://uploads-ssl.webflow.com/5b34885067f597307b210eed/5cee75fff39ac06f6a2017be_Wouter%20Lombard%20M%26CSAATCHI%C2%A0ABEL.png) 0% 0%/100% 100% repeat-x"
									border-radius="4px"
									box-shadow="rgba(0, 0, 0, 0.2) 0px 3px 8px 0px"
									transition="transform .3s ease-in-out,-webkit-transform .3s ease-in-out"
									hover-transform="translate(0,-2px)"
									hover-box-shadow="0 3px 8px 0 rgba(0,0,0,.3)"
									align-items="center"
									justify-content="center"
									margin="0 0 21px 0"
								>
									<Icon
										category="fa"
										icon={FaPlay}
										color="#FFF"
										size="24px"
										width="90px"
										height="60px"
										background="--color-buttonBlue"
									/>
								</Link>
								<Text font="normal 14px/24px Ubuntu" color="rgb(21, 35, 53)" text-align="center">
									Wouter Lombard. Talent Partner HR{" "}
									<br />
									M&C Saatchi Abel
								</Text>
								<Text
									font="normal 500 19px/26.6px Ubuntu"
									color="rgb(21, 35, 53)"
									text-align="center"
									width="92%"
									margin="10px 1px 1px 1px"
								>
									"It’s easy to get started with Hi5 and within a few weeks we started 
getting rich insights & data that we could use to better understand 
our team."
								</Text>
								<Image width="130px" height="auto" src="https://uploads-ssl.webflow.com/5b34885067f597307b210eed/5ced8e53c0e8faa06f9cd0cb_Client%201%20(1).png" margin="28px 0px 0px 0px" />
							</Box>
							{"    "}
						</StackItem>
						<StackItem width="33%" display="flex" nout-margin="0px 0px 0px 0px" md-display="none">
							{"        "}
							<Box
								width="100%"
								display="flex"
								flex-direction="column"
								align-items="center"
								justify-content="space-between"
								nout-margin="0px -15px 0px 0px"
							>
								<Link
									href="#"
									display="flex"
									width="300px"
									height="230px"
									background="url(https://uploads-ssl.webflow.com/5b34885067f597307b210eed/5cee76153c0d6c5224896dcf_Linda%20Roos%20Ooba.png) 0% 0%/100% 100% repeat-x"
									border-radius="4px"
									box-shadow="rgba(0, 0, 0, 0.2) 0px 3px 8px 0px"
									transition="transform .3s ease-in-out,-webkit-transform .3s ease-in-out"
									hover-transform="translate(0,-2px)"
									hover-box-shadow="0 3px 8px 0 rgba(0,0,0,.3)"
									align-items="center"
									justify-content="center"
									margin="0 0 -5px 0"
								>
									<Icon
										category="fa"
										icon={FaPlay}
										color="#FFF"
										size="24px"
										width="90px"
										height="60px"
										background="--color-buttonBlue"
									/>
								</Link>
								<Text font="normal 14px/24px Ubuntu" color="rgb(21, 35, 53)" text-align="center" margin="- - - -">
									Linda Roos. Head of HR{" "}
									<br />
									Ooba
								</Text>
								<Text
									font="normal 500 19px/26.6px Ubuntu"
									color="rgb(21, 35, 53)"
									text-align="center"
									width="85%"
									margin="-14px 1px 1px 1px"
								>
									"People are happier and they are willing to give each other feedback, which we didn't have before."
								</Text>
								<Image width="130px" height="auto" src="https://uploads-ssl.webflow.com/5b34885067f597307b210eed/5ced8e5efd5e3a15e658c2fa_Client%203%20(1).png" margin="28px 0px 0px 0px" />
							</Box>
							{"    "}
						</StackItem>
						{"    "}
					</Stack>
					{"            "}
				</StackItem>
				<StackItem width="50%" display="flex" sm-width="100%">
					<Override slot="StackItemContent" justify-content="center" />
					<Link
						href="#"
						border-color="#000"
						border-width="2px"
						border-style="solid"
						border-radius="4px"
						padding="16px 50px 16px 50px"
						margin="30px 0px 0px 0px"
						font="20px/32px --fontFamily-googleUbuntu"
						text-decoration-line="initial"
						transition="background-color .3s ease-in-out,opacity .3s ease-in-out,transform .3s ease-in-out,-webkit-transform .3s ease-in-out"
						color="#152335"
						hover-background="#faeb51"
						hover-transform="translate(0,-2px)"
						md-padding="16px 40px 16px 40px"
					>
						See all customer ❤️stories
					</Link>
					{"            "}
				</StackItem>
			</Stack>
		</Section>
		<Section
			background="--color-bgYellow"
			margin="100px 0 0 0"
			position="relative"
			z-index="1"
			nout-margin="50px 0 0 0"
			sm-margin="0px 0 0 0"
		>
			<Override
				slot="SectionContent"
				width="100%"
				background="url(https://uploads-ssl.webflow.com/5b34885067f597307b210eed/5ceab5a25abdf6b8e55086d5_1.png) 0/100% "
				height="60px"
				opacity="60%"
				sm-height="50px"
			/>
		</Section>
		<Section
			background="--color-bgYellow"
			transform="skew(0deg,-5deg)"
			height="40vh"
			margin="-300px 0 51px 0"
			justify-content="center"
			align-items="center"
			position="relative"
			z-index="0"
			nout-margin="-240px 0 51px 0"
			nout-height="50vh"
			md-margin="-240px 0 51px 0"
			md-height="60vh"
			sm-margin="-200px 0 51px 0"
			sm-height="100vh"
		>
			<Override slot="SectionContent" width="1045px" lg-top="1px" />
			<Image
				width="150px"
				height="120.167px"
				src="https://uploads-ssl.webflow.com/5b34885067f597307b210eed/5ce3f5977264069592fa4c7d_Vector%202.1.png"
				position="absolute"
				right="auto"
				bottom="-58px"
				nout-bottom="-61px"
				nout-height="120.167px"
				nout-left="auto"
				nout-right="427px"
				nout-top="auto"
				left="559px"
				top="auto"
				md-top="auto"
				md-right="auto"
				md-bottom="-49px"
				md-left="296px"
				sm-bottom="-65px"
				sm-left="auto"
				sm-right="22px"
				sm-top="auto"
				sm-z-index="1000"
			/>
		</Section>
		<Section justify-content="center" margin="102px 0px 0px 0px">
			<Override slot="SectionContent" max-width="1125px" />
			<Stack margin="0 0 120px 0">
				{"    "}
				<StackItem display="flex" width="100%" margin="0 0 20px 0">
					{"        "}
					<Text
						font="normal 700 45px/60px --fontFamily-googleUbuntu"
						margin="0px 0px 0px 0px"
						display="inline-block"
						color="--dark"
						nout-color="#152335"
						sm-font="normal 700 32px/46px --fontFamily-googleUbuntu"
					>
						How teams use Hi5
					</Text>
					{"    "}
				</StackItem>
				{"    "}
				<StackItem width="50%" display="flex" md-width="100%">
					<Override slot="StackItemContent" flex-direction="column" justify-content="start" />
					<Text color="--dark" font="--headline3" margin="0px 0px 32px 0px" sm-font="normal 400 28px/38px Ubuntu, sans-serif">
						Team Managers
					</Text>
					<Components.CardUseCase>
						<Override slot="text1" sm-font="500 17px/24px --fontFamily-googleUbuntu" />
						<Override slot="box1" sm-width="60px" />
					</Components.CardUseCase>
					<Components.CardUseCase>
						<Override slot="text">
							💯
						</Override>
						<Override slot="text1" sm-font="500 17px/24px --fontFamily-googleUbuntu">
							Measure performance & goals
						</Override>
						<Override slot="box1" sm-width="60px" />
					</Components.CardUseCase>
					<Components.CardUseCase>
						<Override slot="text">
							📊
						</Override>
						<Override slot="text1" sm-font="500 17px/24px --fontFamily-googleUbuntu">
							Measure Employee Recognition
						</Override>
						<Override slot="box1" sm-width="60px" />
					</Components.CardUseCase>
					<Components.CardUseCase>
						<Override slot="text">
							📥
						</Override>
						<Override slot="text1" sm-font="500 17px/24px --fontFamily-googleUbuntu">
							Get actionable company insights
						</Override>
						<Override slot="box1" sm-width="60px" />
					</Components.CardUseCase>
					<Components.CardUseCase>
						<Override slot="text">
							📈
						</Override>
						<Override slot="text1" sm-font="500 17px/24px --fontFamily-googleUbuntu">
							Run pulse surveys
						</Override>
						<Override slot="box1" sm-width="60px" />
					</Components.CardUseCase>
					<Components.CardUseCase>
						<Override slot="text">
							📣
						</Override>
						<Override slot="text1" sm-font="500 17px/24px --fontFamily-googleUbuntu">
							Communicate with co-workers
						</Override>
						<Override slot="box1" sm-width="60px" />
					</Components.CardUseCase>
					{"            "}
				</StackItem>
				<StackItem width="50%" display="flex" md-width="100%">
					<Override slot="StackItemContent" flex-direction="column" justify-content="start" />
					<Text color="--dark" font="--headline3" margin="0px 0px 32px 0px" sm-font="normal 400 28px/38px Ubuntu, sans-serif">
						Team Members
					</Text>
					<Components.CardUseCase>
						<Override slot="text1" sm-font="500 17px/24px --fontFamily-googleUbuntu">
							Peer to peer or team recognition
						</Override>
						<Override slot="text">
							👏
						</Override>
						<Override slot="box1" sm-width="60px" />
					</Components.CardUseCase>
					<Components.CardUseCase>
						<Override slot="text">
							✅
						</Override>
						<Override slot="text1" sm-font="500 17px/24px --fontFamily-googleUbuntu">
							Get recognition from clients
						</Override>
						<Override slot="box1" sm-width="60px" />
					</Components.CardUseCase>
					<Components.CardUseCase>
						<Override slot="text" position="static" background="rgba(0, 0, 0, 0)" color="--bgYellow">
							🗓
						</Override>
						<Override slot="text1" sm-font="500 17px/24px --fontFamily-googleUbuntu">
							Create your own goals
						</Override>
						<Override slot="box1" sm-width="60px" />
					</Components.CardUseCase>
					<Components.CardUseCase>
						<Override slot="text">
							🥇
						</Override>
						<Override slot="text1" sm-font="500 17px/24px --fontFamily-googleUbuntu">
							View your Hi5 Leaderboard
						</Override>
						<Override slot="box1" sm-width="60px" />
					</Components.CardUseCase>
					<Components.CardUseCase>
						<Override slot="text">
							🔍
						</Override>
						<Override slot="text1" sm-font="500 17px/24px --fontFamily-googleUbuntu">
							Recognition insights
						</Override>
						<Override slot="box1" sm-width="60px" />
					</Components.CardUseCase>
					<Components.CardUseCase>
						<Override slot="text">
							👥
						</Override>
						<Override slot="text1" lg-width="300px" sm-font="500 17px/24px --fontFamily-googleUbuntu">
							Stay in touch with the People Directory
						</Override>
						<Override slot="box1" sm-width="60px" />
					</Components.CardUseCase>
					{"            "}
				</StackItem>
			</Stack>
		</Section>
		<Section
			justify-content="center"
			margin="0px 0px 0px 0px"
			height="446px"
			background="#3505ff"
			padding="0px 0px 0px 0px"
		>
			<Override
				slot="SectionContent"
				max-width="1125px"
				flex-direction="row"
				align-items="center"
				justify-content="center"
				padding="0px 0px 0px 0px"
				margin="0px 0px 0px 0px"
				height="436px"
			/>
			<Box
				padding="70px 0px 80px 0px"
				display="flex"
				flex-direction="column"
				justify-content="center"
				position="relative"
			>
				<Image
					width="150px"
					height="98.6px"
					src="https://uploads-ssl.webflow.com/5b34885067f597307b210eed/5ce3d11a74fe1255631577b3_Vector%202.3.png"
					position="absolute"
					bottom="auto"
					left="-3%"
					right="auto"
					top="-21%"
					nout-bottom="auto"
					nout-left="-28px"
					nout-right="auto"
					nout-top="-63px"
					md-top="-36px"
					md-right="55px"
					md-bottom="auto"
					md-left="auto"
				/>
				<Text
					font="--headline2"
					color="#fff"
					margin="0 0 16px 0"
					md-text-align="center"
					sm-font="normal 700 32px/42px Ubuntu, sans-serif"
				>
					Ready to grow your company culture?
				</Text>
				<Text
					font="normal 400 20px/32px --fontFamily-googleUbuntu"
					color="#fff"
					margin="0 0 48px 0"
					text-align="center"
					sm-font="normal 400 18px/32px --fontFamily-googleUbuntu"
				>
					Join more than 4000 teams growing their culture with Hi5.
				</Text>
				<Link
					href="#"
					display="block"
					background="--color-bgYellow"
					padding="16px 56px 17px 56px"
					font="20px/32px --fontFamily-googleUbuntu"
					color="--dark"
					text-decoration-line="initial"
					border-radius="4px"
					box-shadow="0 2px 3px 0 rgba(0,0,0,.2)"
					transition=",transform 0.3s --transitionTimingFunction-easeInOut 0s"
					hover-transform="translate(0px, -2px)"
					hover-box-shadow="0 2px 3px 0 rgba(0,0,0,.3)"
					height="33px"
					text-align="center"
					margin="0 auto 0 auto"
				>
					Start for free now{" "}
					<Icon
						icon={MdKeyboardArrowRight}
						category="md"
						color="#000"
						display="inline-block"
						position="relative"
						top="7px"
						left="-3px"
					/>
				</Link>
				<Text font="14px/22px --fontFamily-googleUbuntu" color="#FFF" margin="12px 0px 0 0px" text-align="center">
					🎉 Start in a minute. No credit card needed.
				</Text>
			</Box>
		</Section>
		<Section justify-content="center" margin="0px 0px 0px 0px" padding="5px 0 5px 0">
			<Override slot="SectionContent" max-width="1125px" />
			<Stack padding="80px 0 90px 0px" md-padding="80px 0 50px 0px" sm-flex-direction="column">
				{"    "}
				<StackItem
					width="14%"
					display="flex"
					margin="0px 10px 0px 0px"
					nout-width="16%"
					md-width="20%"
					sm-width="40%"
				>
					{"        "}
					<Box>
						<Link
							href="#"
							display="block"
							transition="transform .3s ease-in-out,-webkit-transform .3s ease-in-out"
							hover-transform="translate(0,-2px)"
							margin="0 0 8px 0"
						>
							<Image height="auto" src="https://uploads-ssl.webflow.com/5b34885067f597307b210eed/5e3292d3bd23a25f37a547f3_Add%20to%20WhatsApp%20button.png" max-width="100%" />
						</Link>
						<Link
							href="#"
							display="block"
							transition="transform .3s ease-in-out,-webkit-transform .3s ease-in-out"
							hover-transform="translate(0,-2px)"
							margin="0 0 8px 0"
						>
							<Image height="auto" src="https://uploads-ssl.webflow.com/5b34885067f597307b210eed/5ec79ee0c56a52d459e8938b_Microsoft%20Teams.png" max-width="100%" />
						</Link>
						<Link
							href="#"
							display="block"
							transition="transform .3s ease-in-out,-webkit-transform .3s ease-in-out"
							hover-transform="translate(0,-2px)"
							margin="0 0 8px 0"
						>
							<Image height="auto" src="https://uploads-ssl.webflow.com/5b34885067f597307b210eed/5ce32310d137dfcf15fffedc_Add%20to%20Slack.svg" max-width="100%" />
						</Link>
						<Link
							href="#"
							display="block"
							transition="transform .3s ease-in-out,-webkit-transform .3s ease-in-out"
							hover-transform="translate(0,-2px)"
							margin="0 0 8px 0"
						>
							<Image height="auto" src="https://www.getapp.com/ext/reviews_widget/v1/dark/hi5-application" max-width="100%" />
						</Link>
					</Box>
					{"    "}
				</StackItem>
				{"    "}
				<StackItem
					width="23%"
					display="flex"
					margin="0 0 8px 15px"
					sm-width="80%"
					sm-margin="0 0 8px 0"
				>
					<Override slot="StackItemContent" display="flex" />
					{"        "}
					<Box
						display="flex"
						flex-direction="column"
						justify-content="start"
						align-items="flex-start"
						margin="-7px 0 0 0"
					>
						<Text font="normal 700 14px/40px --fontFamily-sans" margin="-3px 0px 8px 0px" display="inline-block" color="#3e5267">
							MORE STUFF
						</Text>
						<Link
							href="https://www.get5.io/customers"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
							text-decoration-line="initial"
							color="--grey"
							font="13px/24px --fontFamily-googleUbuntu"
							margin="0 0 8px 0"
							transition="color .2s ease-in-out"
							hover-color="--buttonBlue"
						>
							Why customers ❤️us
						</Link>
						<Link
							href="https://www.get5.io/blog"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
							text-decoration-line="initial"
							color="--grey"
							font="13px/24px --fontFamily-googleUbuntu"
							margin="0 0 8px 0"
							transition="color .2s ease-in-out"
							hover-color="--buttonBlue"
						>
							Blog
						</Link>
						<Link
							href="https://www.get5.io/careers"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
							text-decoration-line="initial"
							color="--grey"
							font="13px/24px --fontFamily-googleUbuntu"
							margin="0 0 8px 0"
							transition="color .2s ease-in-out"
							hover-color="--buttonBlue"
						>
							Careers
						</Link>
						<Link
							href="https://www.get5.io/partners"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
							text-decoration-line="initial"
							color="--grey"
							font="13px/24px --fontFamily-googleUbuntu"
							margin="0 0 8px 0"
							transition="color .2s ease-in-out"
							hover-color="--buttonBlue"
						>
							Partner with us
						</Link>
						<Link
							href="https://www.get5.io/refer"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
							text-decoration-line="initial"
							color="--grey"
							font="13px/24px --fontFamily-googleUbuntu"
							margin="0 0 8px 0"
							transition="color .2s ease-in-out"
							hover-color="--buttonBlue"
						>
							Refer a Company
						</Link>
						<Link
							href="https://www.get5.io/podcast"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
							text-decoration-line="initial"
							color="--grey"
							font="13px/24px --fontFamily-googleUbuntu"
							margin="0 0 8px 0"
							transition="color .2s ease-in-out"
							hover-color="--buttonBlue"
						>
							Podcast - Working better, together.
						</Link>
						<Link
							href="https://www.get5.io/culture"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
							text-decoration-line="initial"
							color="--grey"
							font="13px/24px --fontFamily-googleUbuntu"
							margin="0 0 8px 0"
							transition="color .2s ease-in-out"
							hover-color="--buttonBlue"
						>
							🚀 Top Culture Driven Companies
						</Link>
						<Link
							href="https://www.get5.io/events"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
							text-decoration-line="initial"
							color="--grey"
							font="13px/24px --fontFamily-googleUbuntu"
							margin="0 0 8px 0"
							transition="color .2s ease-in-out"
							hover-color="--buttonBlue"
						>
							{" "}🥐 Culture for Breakfast
						</Link>
						<Link
							href="https://www.get5.io/disrupthr-cape-town"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
							text-decoration-line="initial"
							color="--grey"
							font="13px/24px --fontFamily-googleUbuntu"
							margin="0 0 8px 0"
							transition="color .2s ease-in-out"
							hover-color="--buttonBlue"
						>
							⚡ DisruptHR Cape Town
						</Link>
					</Box>
					{"    "}
				</StackItem>
				<StackItem
					width="20%"
					display="flex"
					margin="0 0 8px 0"
					sm-width="80%"
					sm-margin="0 0 8px 0"
				>
					<Override slot="StackItemContent" display="flex" />
					{"        "}
					<Box
						display="flex"
						flex-direction="column"
						justify-content="start"
						align-items="flex-start"
						margin="-7px 0 0 0"
					>
						<Text font="normal 700 14px/40px --fontFamily-sans" margin="-3px 0px 8px 0px" display="inline-block" color="#3e5267">
							PRODUCT
						</Text>
						<Link
							href="https://www.get5.io/customers"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
							text-decoration-line="initial"
							color="--grey"
							font="13px/24px --fontFamily-googleUbuntu"
							margin="0 0 8px 0"
							transition="color .2s ease-in-out"
							hover-color="--buttonBlue"
						>
							How Hi5 works
						</Link>
						<Link
							href="https://www.get5.io/blog"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
							text-decoration-line="initial"
							color="--grey"
							font="13px/24px --fontFamily-googleUbuntu"
							margin="0 0 8px 0"
							transition="color .2s ease-in-out"
							hover-color="--buttonBlue"
						>
							Pricing
						</Link>
						<Link
							href="https://www.get5.io/careers"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
							text-decoration-line="initial"
							color="--grey"
							font="13px/24px --fontFamily-googleUbuntu"
							margin="0 0 8px 0"
							transition="color .2s ease-in-out"
							hover-color="--buttonBlue"
						>
							Features
						</Link>
						<Link
							href="https://www.get5.io/partners"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
							text-decoration-line="initial"
							color="--grey"
							font="13px/24px --fontFamily-googleUbuntu"
							margin="0 0 8px 0"
							transition="color .2s ease-in-out"
							hover-color="--buttonBlue"
						>
							API
						</Link>
						<Link
							href="https://www.get5.io/refer"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
							text-decoration-line="initial"
							color="--grey"
							font="13px/24px --fontFamily-googleUbuntu"
							margin="0 0 8px 0"
							transition="color .2s ease-in-out"
							hover-color="--buttonBlue"
						>
							Hi5 for startups
						</Link>
						<Link
							href="https://www.get5.io/podcast"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
							text-decoration-line="initial"
							color="--grey"
							font="13px/24px --fontFamily-googleUbuntu"
							margin="0 0 8px 0"
							transition="color .2s ease-in-out"
							hover-color="--buttonBlue"
						>
							Hi5 for non-profits
						</Link>
						<Link
							href="https://www.get5.io/culture"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
							text-decoration-line="initial"
							color="--grey"
							font="13px/24px --fontFamily-googleUbuntu"
							margin="0 0 8px 0"
							transition="color .2s ease-in-out"
							hover-color="--buttonBlue"
						>
							FAQ's
						</Link>
						<Link
							href="https://www.get5.io/events"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
							text-decoration-line="initial"
							color="--grey"
							font="13px/24px --fontFamily-googleUbuntu"
							margin="0 0 8px 0"
							transition="color .2s ease-in-out"
							hover-color="--buttonBlue"
						>
							Help
						</Link>
					</Box>
					{"    "}
				</StackItem>
				<StackItem
					width="28%"
					display="flex"
					margin="0 0 8px 0"
					nout-width="35%"
					md-width="30%"
					sm-width="90%"
				>
					<Override slot="StackItemContent" display="flex" />
					{"        "}
					<Box
						display="flex"
						flex-direction="column"
						justify-content="start"
						align-items="flex-start"
						margin="-7px 0 0 0"
					>
						<Text font="normal 700 14px/40px --fontFamily-sans" margin="-3px 0px 8px 0px" display="inline-block" color="#3e5267">
							CONTACT US
						</Text>
						<Link
							href="https://www.get5.io/customers"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
							text-decoration-line="initial"
							color="--grey"
							font="13px/24px --fontFamily-googleUbuntu"
							margin="0 0 8px 0"
							transition="color .2s ease-in-out"
							hover-color="--buttonBlue"
						>
							📧  help@get5.io
						</Link>
						<Text font="13px/24px --fontFamily-googleUbuntu" margin="0px 0px 8px 0px" display="inline-block" color="#3e5267">
							🇿🇦 15 Glynville Terrace, Gardens, Cape Town
						</Text>
						<Text font="13px/24px --fontFamily-googleUbuntu" margin="0px 0px 8px 0px" display="inline-block" color="#3e5267">
							🇦🇺 Level 2, 79-85 Oxford Street, Bondi Junction NSW 2022
						</Text>
						<Text font="13px/24px --fontFamily-googleUbuntu" margin="0px 0px 8px 0px" display="inline-block" color="#3e5267">
							🇺🇸  2035 Sunset Lake Road, Suite B-2, Newark, DE 19702
						</Text>
						<Link
							href="https://www.get5.io/events"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
							text-decoration-line="initial"
							color="--grey"
							font="13px/24px --fontFamily-googleUbuntu"
							margin="0 0 8px 0"
							transition="color .2s ease-in-out"
							hover-color="--buttonBlue"
						>
							📬 Subscribe to get updates
						</Link>
					</Box>
					{"    "}
				</StackItem>
				<StackItem
					width="50%"
					display="flex"
					nout-width="54%"
					md-width="100%"
					sm-width="100%"
				>
					<Override slot="StackItemContent" md-text-align="center" md-justify-content="center" />
					{"        "}
					<Text
						font="normal 400 13px/24px --fontFamily-googleUbuntu"
						margin="0px 0px 0px 0px"
						display="inline-block"
						color="#93979e"
						md-text-align="center"
						sm-width="90%"
					>
						© 2020 Hi5, Inc. All rights reserved.{" "}
						<Link
							href="https://www.get5.io/privacy"
							color="#93979e"
							transition="color .2s ease-in-out"
							hover-color="--buttonBlue"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							Privacy
						</Link>
						,{" "}
						<Link
							href="https://www.get5.io/terms"
							color="#93979e"
							transition="color .2s ease-in-out"
							hover-color="--buttonBlue"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							Terms of use
						</Link>
						,{" "}
						<Link
							href="https://www.get5.io/security"
							color="#93979e"
							transition="color .2s ease-in-out"
							hover-color="--buttonBlue"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							Security Overview
						</Link>
						.
					</Text>
					{"    "}
				</StackItem>
				<StackItem width="50%" display="flex" nout-width="46%" md-width="100%">
					<Override slot="StackItemContent" justify-content="center" padding="0 30px 0 0px" nout-padding="0 0px 0 0px" />
					<Link href="#">
						<Image
							width="43px"
							height="43px"
							src="https://uploads-ssl.webflow.com/5b34885067f597307b210eed/5ce32a4c927f1aa104ea1347_Twitter.svg"
							transition="transform .3s ease-in-out,-webkit-transform .3s ease-in-out"
							hover-transform="translate(0,-2px)"
							margin="0 0 0 8px"
						/>
					</Link>
					<Link href="#">
						<Image
							width="43px"
							height="43px"
							src="https://uploads-ssl.webflow.com/5b34885067f597307b210eed/5ce32a81d137df2be50024d5_Facebook.svg"
							transition="transform .3s ease-in-out,-webkit-transform .3s ease-in-out"
							hover-transform="translate(0,-2px)"
							margin="0 0 0 12px"
						/>
					</Link>
					<Link href="#">
						<Image
							width="43px"
							height="43px"
							src="https://uploads-ssl.webflow.com/5b34885067f597307b210eed/5ce32a8de9892d5efb8e8e42_Instagram.svg"
							transition="transform .3s ease-in-out,-webkit-transform .3s ease-in-out"
							hover-transform="translate(0,-2px)"
							margin="0 0 0 12px"
						/>
					</Link>
					<Link href="#">
						<Image
							width="43px"
							height="43px"
							src="https://uploads-ssl.webflow.com/5b34885067f597307b210eed/5ce32a9fb284e1a72d24bb48_LinkedIn.svg"
							transition="transform .3s ease-in-out,-webkit-transform .3s ease-in-out"
							hover-transform="translate(0,-2px)"
							margin="0 0 0 12px"
						/>
					</Link>
					<Link href="#">
						<Image
							width="43px"
							height="43px"
							src="https://uploads-ssl.webflow.com/5b34885067f597307b210eed/5ce32aa9927f1ac73dea1391_Medium.svg"
							transition="transform .3s ease-in-out,-webkit-transform .3s ease-in-out"
							hover-transform="translate(0,-2px)"
							margin="0 0 0 12px"
						/>
					</Link>
					<Link href="#">
						<Image
							width="43px"
							height="43px"
							src="https://uploads-ssl.webflow.com/5b34885067f597307b210eed/5ce32aca76993539ec282231_Youtube.svg"
							transition="transform .3s ease-in-out,-webkit-transform .3s ease-in-out"
							hover-transform="translate(0,-2px)"
							margin="0 0 0 12px"
						/>
					</Link>
					{"            "}
				</StackItem>
			</Stack>
		</Section>
		<Section
			height="25px"
			background="#2fdcfa"
			position="sticky"
			bottom="0px"
			z-index="1000"
			transform="translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg)"
			top="90vh"
		>
			<Override slot="SectionContent" align-items="center" justify-content="center" />
			<Box display="flex" align-items="center" justify-content="center">
				<Link
					href="#"
					color="#FFF"
					text-decoration-line="initial"
					font="30px/24px --fontFamily-googleUbuntu"
					sm-text-align="center"
				>
					Startup? Get the 8-Step Guide to HR for Startups →
				</Link>
			</Box>
		</Section>
	</Theme>;
});