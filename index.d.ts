declare module "rn-apple-healthkit" {
    export type Permission =
      "ActiveEnergyBurned" |
      "AppleExerciseTime" |
      "BasalEnergyBurned" |
      "BiologicalSex" |
      "BloodGlucose" |
      "BloodPressureDiastolic" |
      "BloodPressureSystolic" |
      "BodyFatPercentage" |
      "BodyMass" |
      "BodyMassIndex" |
      "BodyTemperature" |
      "DateOfBirth" |
      "Biotin" |
      "Caffeine" |
      "Calcium" |
      "Carbohydrates" |
      "Chloride" |
      "Cholesterol" |
      "Copper" |
      "EnergyConsumed" |
      "FatMonounsaturated" |
      "FatPolyunsaturated" |
      "FatSaturated" |
      "FatTotal" |
      "Fiber" |
      "Folate" |
      "Iodine" |
      "Iron" |
      "Magnesium" |
      "Manganese" |
      "Molybdenum" |
      "Niacin" |
      "Oxygen" |
      "PantothenicAcid" |
      "Phosphorus" |
      "Potassium" |
      "Protein" |
      "Riboflavin" |
      "Selenium" |
      "Sodium" |
      "Sugar" |
      "Thiamin" |
      "VitaminA" |
      "VitaminB12" |
      "VitaminB6" |
      "VitaminC" |
      "VitaminD" |
      "VitaminE" |
      "VitaminK" |
      "Zinc" |
      "Water" |
      "DistanceCycling" |
      "DistanceSwimming" |
      "DistanceWalkingRunning" |
      "FlightsClimbed" |
      "HeartRate" |
      "Height" |
      "LeanBodyMass" |
      "MindfulSession" |
      "NikeFuel" |
      "RespiratoryRate" |
      "SleepAnalysis" |
      "StepCount" |
      "Steps" |
      "Weight" |
      "Workout"

    export interface HealthKitPermissions {
        permissions: {
            read: Permission[];
            write: Permission[];
        };
    }
    export interface MindfulSessionData {
        startDate?: Date,
        endDate?: Date,
        limit?: number
    }

    export type ISO8601DateString = string;

    export interface OxygenSamplesOptions {
      readonly limit?: number;
      readonly ascending?: boolean;
      readonly startDate: ISO8601DateString;
      readonly endDate?: ISO8601DateString;
    }

    export interface AppleHealthKit {
        initHealthKit(permissions: HealthKitPermissions, callback: (error: string, result: Object) => void): void;

        saveFood(options: Object, callback: (error: string, result: Object) => void): void;

        isAvailable(callback: (error: Object, results: boolean) => void): void;

        getDateOfBirth(options: any, callback: (error: Object, results: HealthDateOfBirth) => void): void;

        getLatestHeight(options: HealthUnitOptions, callback: (err: string, results: HealthValue) => void): void;

        getLatestWeight(options: HealthUnitOptions, callback: (err: string, results: HealthValue) => void): void;

        getMindfulSession(options: MindfulSessionData, callback: (err: string, results: HealthValue) => void): void;

        getStepCount(options: any, callback: (err: string, results: HealthValue) => void): void;

        getOxygenSamples(options: OxygenSamplesOptions, callback: (err: string, results: ReadonlyArray<HealthValue>) => void): void;
    }

    export interface HealthDateOfBirth {
        value: string;
        age: number;
    }

    export interface HealthValue {
        value: number;
        startDate: string;
        endDate: string;
    }

    export interface HealthUnitOptions {
        unit: HealthUnit;
    }
    export enum HealthUnit {
        bpm = "bpm",
        calorie = "calorie",
        celsius = "celsius",
        count = "count",
        day = "day",
        fahrenheit = "fahrenheit",
        foot = "foot",
        gram = "gram",
        hour = "hour",
        inch = "inch",
        joule = "joule",
        meter = "meter",
        mgPerdL = "mgPerdL",
        mile = "mile",
        minute = "minute",
        mmhg = "mmhg",
        mmolPerL = "mmolPerL",
        percent = "percent",
        pound = "pound",
        second = "second"
    }

    const appleHealthKit: AppleHealthKit;
    export default appleHealthKit;
}
