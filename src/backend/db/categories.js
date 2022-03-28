import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
	{
		_id: uuid(),
		categoryName: "Lifestyle",
		description: "Lifestyle sneakers are the daily use and extremely funky sneakers.",
	},
	{
		_id: uuid(),
		categoryName: "Running",
		description: "These are the sneakers professional athletes use for professional and serious tournaments.",
	},
	{
		_id: uuid(),
		categoryName: "Skateboarding",
		description: "Yo! These are the must have for any person in the skateboarding culture.",
	},
];
