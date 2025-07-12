class ApiResponse {
  public success: boolean;
  constructor(
    public status: number,
    public message: string,
    public data?: any
  ) {
    this.success = status < 400;
  }
}

export { ApiResponse };