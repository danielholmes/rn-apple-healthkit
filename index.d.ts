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
      "HeartRateVariability" |
      "Heartbeat" |
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
      "RestingHeartRate" |
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

    export interface HeartRateVariabilitySamplesOptions {
        readonly limit?: number;
        readonly ascending?: boolean;
        readonly startDate: ISO8601DateString;
        readonly endDate?: ISO8601DateString;
    }

    export interface RestingHeartRateSamplesOptions {
        readonly limit?: number;
        readonly ascending?: boolean;
        readonly startDate: ISO8601DateString;
        readonly endDate?: ISO8601DateString;
    }

    export interface SleepSamplesOptions {
        readonly limit?: number;
        readonly startDate: ISO8601DateString;
        readonly endDate?: ISO8601DateString;
    }

    export interface Source {
        readonly name: string;
        readonly bundleIdentifier: string;
    }

    export interface SourceRevision {
        readonly source: Source;
    }

    export interface HeartbeatTime {
        readonly timeSinceSeriesStart: number;
        readonly precededByGap: boolean;
    }

    export interface HeartbeatSeriesSampleOptions {
        readonly startDate: ISO8601DateString;
    }

    export interface HeartbeatSeriesSample {
        readonly sourceRevision: SourceRevision;
        readonly startDate: ISO8601DateString;
        readonly endDate: ISO8601DateString;
        readonly times: ReadonlyArray<HeartbeatTime>;
    }

    export interface AppleHealthKit {
        initHealthKit(permissions: HealthKitPermissions, callback: (error: Error | null, result: Object) => void): void;

        saveFood(options: Object, callback: (error: Error | null, result: Object) => void): void;

        isAvailable(callback: (error: Object, results: boolean) => void): void;

        getHeartbeatSeriesSamples(options: HeartbeatSeriesSampleOptions): Promise<ReadonlyArray<HeartbeatSeriesSample>>;

        getDateOfBirth(options: any, callback: (error: Object, results: HealthDateOfBirth) => void): void;

        getLatestHeight(options: HealthUnitOptions, callback: (error: Error | null, results: HealthValue) => void): void;

        getLatestWeight(options: HealthUnitOptions, callback: (error: Error | null, results: HealthValue) => void): void;

        getMindfulSession(options: MindfulSessionData, callback: (error: Error | null, results: HealthValue) => void): void;

        getStepCount(options: any, callback: (error: Error | null, results: HealthValue) => void): void;

        getOxygenSamples(options: OxygenSamplesOptions, callback: (error: Error | null, results: ReadonlyArray<HealthValue>) => void): void;

        getHeartRateVariabilitySamples(options: HeartRateVariabilitySamplesOptions, callback: (error: Error | null, results: ReadonlyArray<HealthValue>) => void): void;

        getRestingHeartRateSamples(options: RestingHeartRateSamplesOptions, callback: (error: Error | null, results: ReadonlyArray<HealthValue>) => void): void;

        getSleepSamples(options: SleepSamplesOptions, callback: (error: Error | null, results: ReadonlyArray<SleepValue>) => void): void;
    }

    export interface HealthDateOfBirth {
        value: string;
        age: number;
    }

    export interface ResultValue<T> {
        readonly sourceId: string;
        readonly sourceName: string;
        readonly value: T;
        readonly startDate: string;
        readonly endDate: string;
    }

    export type SleepType = 'INBED' | 'ASLEEP' | 'AWAKE';

    export type SleepValue = ResultValue<SleepType>;

    export type HealthValue = ResultValue<number>;

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
