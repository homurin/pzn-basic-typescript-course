export enum ReleaseType {
  LTS,
  STABLE,
  ROLLING,
}

// export enum ReleaseType {
//   LTS = 1,
//   STABLE = 2,
//   ROLLING = 3,
// }

export enum Type {
  SERVER = "SERVER",
  DESKTOP = "DESKTOP",
  GAMING = "GAMING",
}

export type Distro = {
  id: string;
  name: string;
  releaseType: ReleaseType;
  type: Type;
  desc?: string;
};
