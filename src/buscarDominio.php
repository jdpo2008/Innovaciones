<?php 

function WOIS($WOIS='',$Dominio){
	$stringDatoWois="";
	$Mostrar=array();
	       $sock = fsockopen($WOIS, 43);
	       if(!$sock){
	       	$Mostrar[0] = false;
	       }else{
	       	$Mostrar[0] = true;
			    fwrite($sock, $Dominio."\r\n");
				while(!feof($sock) ){
				  	$stringDatoWois .= fgetss($sock,128);
				}	
			    fclose($sock);
			$Mostrar[1]=$stringDatoWois;     
	       } 
return $Mostrar;	       
}
   $WoisNombre = array(
   	          '.com'   =>array('whois.crsnic.net','No match for'),//.com
   	          '.net'   =>array('whois.crsnic.net','No match for'),// .net
   	          '.bo'    =>array('whois.nic.bo','whois.nic.bo solo acepta consultas con dominios .bo'),//.bo
   	          '.mx'    =>array('whois.nic.mx','No match for'),//.mx
              '.pe'    =>array('whois.nic.pe','No match for'),//.pe
              '.ve'    =>array('whois.nic.ve','No match for'),//.ve
   	          '.co'    =>array('whois.nic.co','No match for'));//.co
         $NombreDominio   =empty($_POST['Nomb']) ? false :  $_POST['Nomb'];
         $ExtesionDominio =empty($_POST['Ext'])  ? false :  $_POST['Ext'];
         $incremento       =empty($_POST['Incremento']) ? 0 :  $_POST['Incremento'];
    if(strlen($NombreDominio)>0){
    	$stringParser="";
       $NombreDominio   = preg_replace(array(
				'/www./','/http:\//','/\//','/.com/',
				'/.bo/','/.com.bo/','/edu.bo/',
				'/.org.bo/','/.net/','/.mx/',
				'/.pe/','/.ve/','/.co/'), '', $NombreDominio);
       	foreach ($WoisNombre as $key => $value) {
       		if($key==$ExtesionDominio){
            if (WOIS($value[0],$NombreDominio.$ExtesionDominio)[0]==true){
                  $DatoSWois= WOIS($value[0],$NombreDominio.$ExtesionDominio)[1];
                  $Disponible = {
                      'dominio': .$NombreDominio.$ExtesionDominio,
                      'disponoble': true
                  };
                    $NoDisponible = {
                        'dominio': .$NombreDominio.$ExtesionDominio,
                        'disponoble': false
                    };
                       //Quitamos algunos caracteres
                       //del servidor WHOIS Boliviano    
                      if($key==".bo"){
                        $DatoSWois=str_replace(array("\r\n", "\n", "\r"), '', $DatoSWois);
                         if($DatoSWois==$value[1]){
                           echo $Disponible;
                        }else{
                            echo $NoDisponible; 
                        }
                      }else{
                        //Buscamos 
                        if (preg_match("/".$value[1]."/i",$DatoSWois)){
                            echo $Disponible ;
                          }else{
                            echo $NoDisponible; 
                          }
                      }
               }else{
               }
       		}
       	} 	  
     }
 ?>