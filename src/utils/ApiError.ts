class ApiErrorRes {
  public success: boolean;
  constructor(
    public statusCode: number,
    public message: string,
    public data: any
  ) {
    this.success = false;
  }
}

export { ApiErrorRes };