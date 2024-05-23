import React from 'react';
import backgroundImg from "../../assets/img/PELOTA.png";

const Video = () => {

  const videoUrl = "https://portfoliojugador.s3.us-east-1.amazonaws.com/video/JuanIgnacioCettou.mp4?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLWVhc3QtMSJGMEQCIG1AY6U0qOeTZSZjC%2F51k%2B8ndooqj3jqT%2FnA8dsrswlDAiBXD7fzWxH81qWCarDCe5xdatsRQo5MOMFaurKTZjP04CrkAgh5EAAaDDMzOTcxMzA3MzA1OCIMWdOCouMh%2FVXN2HLvKsECjrPPRU34daJcCYmemH2zfmnGoTstn2%2B5YKhsxmL97KvP085G2s346tiyRRtnlRzjBdv1oYq8fvLhh3aWdhVytlb9ylZt%2FzatLLaHT2BolYsM5iVru7FTgxZ861JS1Nm1TqOyoeWNYdOCIlSmtxadmYsGjZAMIYrNDy0zGplSWXCU5tXexbdMZ%2FfR5rVLoYxQbyUz%2F4w3vz517VJYghyqxDwozgBvT5uAebedx%2FX00gnW5lJCrIIgVY4R0AKi33HBspn2V8%2BfPQNQCmZ0Jk9hr8kRzaqCFaXz%2FDw5lKqua3wsiVWUzjD93LWu%2Bc37TyQPk4Br5FlmOOVYxiUCYN1Dza8u9qhoHsRPQ%2FVVb0FkoyUmYRWB%2F%2FjvCVCBI5CVpDSUOtPHNuyMRBFdZUdRwdLT9%2FaXVAybD1azuWik%2BQI%2FXDIZMI3FvbIGOrQC25Fs0nr4rvb6WpEFNwS4PBIoQIKGv4Fy732Ny4KubbEr74870PIr%2F6jXR4qiv2M1Vk2Xx0aszu9NP4kH8qOxA8HAUNY2%2Bw0n5EHN8nNDkzrIOvOtwYOcDRkUeBV54sKEFiuaqYMUImaexIvHY%2FmFAFmfGdimUbXfl5%2BqEcnbYyiGhg44jh5ZwMGwxiU42tn9A5QGojDedLJBMoKq3XaRr58aySJt0ugM38%2FbF41PWVhEuW5ImL6q%2BgBX1QtLwt4cBX97Pc4PT%2F9ZnYRpzrMqV5I5tpofsRFrEES0QtBkRP2YJPFZrP0lTSVwRc1QlozFO6ovOUPObdX7yBQaqzmyrKcvddZvzu2T6gP%2FU9ZS3vFptAIxpHs2hoVZvm%2BqOAYNxo5JhXoPn4tlJvqiz0IZ8vP56IA%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240523T164031Z&X-Amz-SignedHeaders=host&X-Amz-Expires=299&X-Amz-Credential=ASIAU6GD2D6RONMMQA5M%2F20240523%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=9b9d83a21cfcb394b4ee886be9b4ff3f35f4dca4d4884a958212e0c325f506f1";
  
  return (
    <div className="relative md:min-h-screen" id="videos">
    {/* Fondo con opacidad */}
    <div className="absolute inset-0 bg-cover bg-center bg-no-repeat w-full h-full " style={{ backgroundImage: `url(${backgroundImg})`, zIndex: -1 }}>
      <div className="absolute inset-0 bg-black opacity-30"></div>
    </div>

    {/* Contenido */}
    <div className="flex flex-col items-center justify-center text-white relative z-10">
      <h1 className="text-3xl font-bold text-center mb-8 mt-8">Video</h1>
      <div className="w-full md:w-2/3 lg:w-1/2 max-w-xl">
        <video controls className="video-player">
          <source src={videoUrl} type="video/mp4" />
        </video>
      </div>
    </div>
    </div>
  );
};

export default Video;


