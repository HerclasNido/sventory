import { z } from "zod";

const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];


export const loginSchema = z.object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(1, "Password required"),
});

export const activeOrgSchema = z.object({
    organizationID: z.string().min(1, "Please select an organization"),
});

export const placeSchema = z.object({
    name: z.string().min(1, "Name required"),
    type: z.string().min(1, "Type required"),
    addressLine1: z.string().min(1, "Address Line 1 required"),
    addressLine2: z.string().optional(),
    city: z.string().min(1, "City required"),
    state: z.string().min(1, "State required"),
    postalCode: z.string().min(1, "Postal Code required"),
    country: z.string().min(1, "Country required"),
});

export const locationSchema = z.object({
    placeId: z.string().min(1, "Place required"),
    parentLocationId: z.string().optional(),
    name: z.string().min(1, "Name required"),
    type: z.string().min(1, "Type required"),
    description: z.string().optional(),
});

export const categorySchema = z.object({
    name: z.string().min(1, "Name required"),
    description: z.string().optional(),
    parentCategoryId: z.string().optional(),
});

export const itemSchema = z.object({
    categoryId: z.string().min(1, "Category required"),
    sku: z.string().min(1, "SKU required"),
    name: z.string().min(1, "Name required"),
    description: z.string().optional(),
    quantity: z.string().min(1, "Quantity required"),
    unitOfMeasure: z.string().min(1, "Unit of Measure required"),
    minimumStock: z.string().optional(),
    maximumStock: z.string().optional(),
    reorderPoint: z.string().optional(),
    costPrice: z.string().optional(),
    sellingPrice: z.string().optional(),
    msrp: z.string().optional(),
    barcode: z.string().optional(),
    weight: z.string().optional(),
    dimensions: z.string().optional(),
    image: z.instanceof(File)
        .optional()
        .nullable()
        .refine(
            (file) => !file || file.size <= MAX_FILE_SIZE,
            `Max image size is 5MB.`
        )
        .refine(
            (file) => !file || ACCEPTED_IMAGE_TYPES.includes(file.type),
            "Only .jpg, .jpeg, .png and .webp formats are supported."
        ),
});