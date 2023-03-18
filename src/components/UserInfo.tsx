interface UserInfoProps {
  userInfo: any;
}

function UserInformation({ userInfo }: UserInfoProps) {
  const {
    imageUrl,
    prefix,
    name,
    lastName,
    title,
    email,
    ip,
    jobArea,
    jobType,
  } = userInfo;
  const { city, country, state, streetAddress, zipCode } = userInfo.address;
  return (
    <div className="f-wull flex flex-col lg:flex-row justify-between items-center p-[20px]">
      <img src={imageUrl} alt={name} className="h-[200px]"/>
      <fieldset className="border-2 border-solid border-gray-500 p-3 w-full mx-[10px] justify-evenly">
        <legend>Info</legend>
        <div className="mb-4">
          <strong>
            {prefix} {name} {lastName}
          </strong>
          <br />
          <i>{title}</i>
        </div>

        <div>
          <p>
            <span className="underline">Email:</span> {email}
          </p>
          <p>
            <span className="underline">Ip Address:</span> {ip}
          </p>
          <p>
            <span className="underline">Job Area:</span> {jobArea}
          </p>
          <p>
            <span className="underline">Job Type:</span> {jobType}
          </p>
        </div>
      </fieldset>

      <fieldset
        id="fieldset2"
        className="border-2 border-solid border-gray-500 p-3"
      >
        <legend>Address</legend>
        <strong>
          {userInfo.company.name} {userInfo.company.suffix}{" "}
        </strong>
        <p>
          <span className="underline">City:</span> {city}
        </p>
        <p>
          <span className="underline">Country:</span> {country}
        </p>
        <p>
          <span className="underline">State:</span> {state}
        </p>
        <p>
          <span className="underline">Street Address:</span> {streetAddress}
        </p>
        <p>
          <span className="underline">ZIP:</span> {zipCode}
        </p>
      </fieldset>
    </div>
  );
}

export default UserInformation;

const Container = `
  width: 100%;

  display: flex;
  justify-content: space-between;

  img {
    width: 265px;
    height: 250px;
  }

  fieldset {
    /* text-align: left; */
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    span {
      text-decoration: underline;
    }
  }
  #fieldset1 {
    width: 100%;
    margin: 0 10px;
    justify-content: space-evenly;
  }

  @media (max-width: 800px) {
    flex-direction: column;
    img {
      width: 100%;
    }
    #fieldset1 {
      margin: 0;
    }
  }
`;
