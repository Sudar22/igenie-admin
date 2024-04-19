import React from 'react'


interface Svgjsx{
name:string
width:string
height:string
}


export default function Commonsvg(props:Svgjsx) {
  
    
if(props.name =='igenie-logo'){

    return (

        <svg
        xmlns="http://www.w3.org/2000/svg"
        // width="147"
        // height="52"
        fill="none"
        viewBox="0 0 147 52"
        {...props}
        
      >
        <path
          fill="#F23005"
          d="M131.484 35.144c-1.23 0-1.176-.751-2.057-1.44-.881-.69-2.431-1.11-2.431-2.072 0-.991.44-1.832 1.321-2.521.882-.69 1.937-1.034 3.167-1.034 1.267 0 2.331.345 3.194 1.034.881.69 1.322 1.53 1.322 2.52 0 .963-.441 1.79-1.322 2.479-.863.689-1.927 1.034-3.194 1.034z"
        ></path>
        <path
          fill="#000"
          d="M90.802 35.858V18.169h6.966v17.689h-6.966zm3.58-22.257c-1.157 0-2.14-.316-2.947-.948-.79-.632-1.184-1.386-1.184-2.262 0-.876.403-1.637 1.211-2.284.808-.646 1.78-.97 2.92-.97.752 0 1.44.152 2.064.453.624.287 1.13.675 1.515 1.164.385.488.578 1.034.578 1.637 0 .876-.413 1.63-1.239 2.262-.808.632-1.78.948-2.919.948zM104.294 28.23c.055.805.331 1.523.826 2.155.496.632 1.212 1.128 2.148 1.487.954.359 2.093.538 3.415.538 1.193 0 2.239-.114 3.139-.344.918-.23 1.689-.51 2.313-.84.642-.345 1.119-.675 1.432-.991l2.891 3.36c-.514.503-1.202.97-2.065 1.401-.845.417-1.928.747-3.25.991-1.303.259-2.937.388-4.901.388-2.478 0-4.654-.38-6.526-1.142-1.873-.761-3.332-1.86-4.378-3.296-1.047-1.437-1.57-3.146-1.57-5.128 0-1.724.468-3.275 1.404-4.654.937-1.393 2.295-2.492 4.076-3.297 1.799-.804 3.956-1.206 6.471-1.206 2.368 0 4.415.359 6.14 1.077 1.745.704 3.094 1.738 4.048 3.103.954 1.364 1.432 3.03 1.432 4.998 0 .115-.009.352-.028.711 0 .345-.018.575-.055.69h-16.962zm10.491-3.382c-.018-.46-.202-.955-.55-1.486-.331-.532-.854-.984-1.57-1.358-.716-.373-1.67-.56-2.864-.56-1.193 0-2.175.18-2.946.539-.753.359-1.322.804-1.707 1.335-.386.517-.606 1.027-.661 1.53h10.298zM80.696 17.652c1.542 0 3.047.251 4.516.754 1.468.488 2.67 1.271 3.607 2.349.954 1.077 1.432 2.484 1.432 4.222v10.88h-7.022v-9.932c0-1.45-.44-2.528-1.322-3.231-.863-.704-2-1.056-3.414-1.056-.918 0-1.8.2-2.644.603a5.373 5.373 0 00-2.037 1.637c-.514.69-.771 1.48-.771 2.37v9.61h-6.995V18.169h6.995v2.822c.202-.488.66-.99 1.377-1.508.715-.517 1.624-.948 2.726-1.293 1.101-.359 2.285-.538 3.552-.538z"
        ></path>
        <path
          fill="#000"
          d="M49.364 28.23a3.84 3.84 0 00.826 2.155c.495.632 1.211 1.128 2.148 1.487.954.359 2.092.538 3.414.538 1.193 0 2.24-.114 3.14-.344.917-.23 1.688-.51 2.312-.84.642-.345 1.12-.675 1.432-.991l2.891 3.36c-.514.503-1.202.97-2.065 1.401-.844.417-1.928.747-3.25.991-1.303.259-2.936.388-4.9.388-2.479 0-4.654-.38-6.527-1.142-1.872-.761-3.332-1.86-4.378-3.296-1.046-1.437-1.57-3.146-1.57-5.128 0-1.724.469-3.275 1.405-4.654.936-1.393 2.295-2.492 4.075-3.297 1.8-.804 3.956-1.206 6.471-1.206 2.368 0 4.415.359 6.14 1.077 1.745.704 3.094 1.738 4.049 3.103.954 1.364 1.431 3.03 1.431 4.998 0 .115-.009.352-.027.711 0 .345-.018.575-.055.69H49.364zm10.49-3.382c-.017-.46-.201-.955-.55-1.486-.33-.532-.854-.984-1.57-1.358-.715-.373-1.67-.56-2.863-.56-1.194 0-2.176.18-2.947.539-.752.359-1.321.804-1.707 1.335-.385.517-.606 1.027-.66 1.53h10.298z"
        ></path>
        <path
          fill="#C1CBD9"
          d="M95.99 8.157c0 .34-.352.615-.787.615-.434 0-.786-.276-.786-.615 0-.34.352-.616.786-.616.435 0 .787.276.787.616z"
        ></path>
        <path
          fill="#024554"
          fillRule="evenodd"
          d="M.394 12.325V32.01l5.491 2.77 5.218-2.77v-.548c.222.206.452.407.69.603 1.633 1.35 3.58 2.406 5.837 3.167 2.258.761 4.755 1.142 7.49 1.142 2.662 0 5.094-.373 7.297-1.12 2.221-.747 4.14-1.782 5.755-3.103 1.616-1.336 2.855-2.88 3.718-4.632.88-1.767 1.321-3.663 1.321-5.688V20.13H24.762v4.18h10.74a6.074 6.074 0 01-.91 2.779c-.532.847-1.257 1.587-2.175 2.219-.9.632-1.964 1.12-3.194 1.465s-2.598.517-4.103.517c-1.652 0-3.176-.251-4.571-.754-1.377-.503-2.57-1.2-3.58-2.09a9.925 9.925 0 01-2.313-3.102 8.603 8.603 0 01-.826-3.728c0-1.307.276-2.542.826-3.706a9.607 9.607 0 012.313-3.102c1.01-.89 2.203-1.587 3.58-2.09 1.395-.517 2.919-.776 4.571-.776 2.221 0 4.057.36 5.507 1.078 1.469.718 2.329 1.518 3.21 2.524l6.758-2.395c-.605-.747-1.367-1.487-2.285-2.22-.9-.746-1.974-1.421-3.222-2.025-1.23-.617-2.67-1.106-4.323-1.465-1.652-.359-3.534-.538-5.645-.538-2.735 0-5.232.38-7.49 1.142-2.258.76-4.204 1.817-5.837 3.167-.435.355-.844.727-1.226 1.115H.394zm10.173 0a14.011 14.011 0 00-2.574 3.582c-.499 1.007.03 1.998.583 3.036.425.797.865 1.621.865 2.5 0 .876-.429 1.76-.849 2.627-.559 1.153-1.103 2.274-.6 3.299a14.387 14.387 0 003.111 4.094V12.325h-.536zm-6.32-4.17c.516-.106 1.062-.218 1.638-.218.568 0 1.108.112 1.618.218.944.197 1.79.373 2.539-.218 1.173-.912 1.76-1.998 1.76-3.261 0-.864-.274-1.647-.82-2.35-.546-.704-1.264-1.263-2.154-1.679C7.938.216 6.958 0 5.885 0 4.247 0 2.852.464 1.7 1.39.566 2.319 0 3.414 0 4.677s.566 2.35 1.699 3.26c.747.591 1.597.416 2.548.22z"
          clipRule="evenodd"
        ></path>
        <path
          fill="#C1CBD9"
          d="M10.567 12.325a14.011 14.011 0 00-2.574 3.582c-.499 1.007.03 1.998.583 3.036.425.797.865 1.621.865 2.5 0 .876-.429 1.76-.849 2.627-.559 1.153-1.103 2.274-.6 3.299a14.387 14.387 0 003.111 4.094V12.325h-.536z"
        ></path>
        <path
          fill="#000"
          d="M133 33c-.55 0-1.021-.196-1.412-.587A1.925 1.925 0 01131 31c0-.55.196-1.02.588-1.413A1.924 1.924 0 01133 29c.55 0 1.021.196 1.412.587.392.392.588.863.588 1.413s-.196 1.02-.588 1.413A1.924 1.924 0 01133 33zm10 0c-.55 0-1.021-.196-1.412-.587A1.925 1.925 0 01141 31c0-.55.196-1.02.588-1.413A1.924 1.924 0 01143 29c.55 0 1.021.196 1.413.587.391.392.587.863.587 1.413s-.196 1.02-.587 1.413A1.927 1.927 0 01143 33zm-10.85-16l2.4 5h7l2.75-5h-12.15zm-.95-2h14.75c.383 0 .675.17.875.512.2.342.208.688.025 1.038l-3.55 6.4a1.997 1.997 0 01-.738.775 1.942 1.942 0 01-1.012.275h-7.45l-1.1 2h12v2h-12c-.75 0-1.317-.33-1.7-.988-.383-.658-.4-1.312-.05-1.962l1.35-2.45L129 15h-2v-2h3.25l.95 2zM37.528 45.665c.2 0 .387.035.56.105.172.065.322.152.448.259.13.107.23.22.3.336a.617.617 0 01.113.329l-.133-.084v-.609c0-.08.025-.145.077-.196a.262.262 0 01.203-.084c.08 0 .144.028.196.084a.254.254 0 01.084.196v3.066c0 .383-.082.7-.245.952a1.487 1.487 0 01-.644.567 2.13 2.13 0 01-1.372.133 2.534 2.534 0 01-.448-.14c-.13-.051-.215-.105-.252-.161a.307.307 0 01-.133-.161.186.186 0 01.035-.161c.042-.065.095-.098.16-.098.07 0 .157.021.26.063.042.014.107.037.196.07.093.033.196.06.308.084.116.028.23.042.343.042.396 0 .7-.105.91-.315.214-.205.322-.478.322-.819v-.651l.077.035a.877.877 0 01-.175.364 1.387 1.387 0 01-.315.301 1.65 1.65 0 01-.406.203 1.63 1.63 0 01-1.337-.175 1.766 1.766 0 01-.623-.672 2.064 2.064 0 01-.224-.973c0-.369.074-.695.224-.98.154-.285.36-.506.616-.665.261-.163.553-.245.875-.245zm.07.518c-.238 0-.453.06-.644.182a1.228 1.228 0 00-.441.483 1.561 1.561 0 00-.154.707c0 .257.051.49.154.7.107.205.254.369.44.49.192.121.407.182.645.182.242 0 .457-.058.644-.175.186-.121.333-.285.44-.49.108-.205.162-.441.162-.707 0-.27-.054-.509-.161-.714a1.227 1.227 0 00-.441-.483 1.189 1.189 0 00-.644-.175zm5.88 2.905c0 .08-.029.147-.085.203a.277.277 0 01-.203.084.254.254 0 01-.196-.084.29.29 0 01-.077-.203v-4.613a.276.276 0 01.28-.28c.084 0 .152.028.203.084a.266.266 0 01.077.196v4.613zm6.904-1.533c0 .364-.082.688-.245.973a1.766 1.766 0 01-1.568.917c-.34 0-.649-.082-.924-.245a1.817 1.817 0 01-.658-.672 1.964 1.964 0 01-.238-.973c0-.364.08-.688.238-.973.163-.285.383-.509.658-.672.275-.163.583-.245.924-.245a1.766 1.766 0 011.568.917c.163.285.245.609.245.973zm-.56 0c0-.27-.056-.509-.168-.714a1.21 1.21 0 00-1.085-.658c-.238 0-.453.058-.644.175a1.279 1.279 0 00-.448.483 1.467 1.467 0 00-.168.714c0 .266.056.502.168.707.112.205.261.369.448.49.191.117.406.175.644.175s.45-.058.637-.175c.191-.121.34-.285.448-.49.112-.205.168-.441.168-.707zm5.637-1.89c.317 0 .602.082.854.245.252.159.45.378.595.658.15.28.224.604.224.973s-.075.695-.224.98a1.753 1.753 0 01-.595.679 1.49 1.49 0 01-.84.245 1.54 1.54 0 01-.49-.077 1.829 1.829 0 01-.413-.217 1.715 1.715 0 01-.308-.301 1.225 1.225 0 01-.182-.329l.154-.098v.7a.29.29 0 01-.077.203.262.262 0 01-.203.084.29.29 0 01-.203-.077.299.299 0 01-.077-.21v-4.641a.29.29 0 01.077-.203.276.276 0 01.203-.084c.084 0 .152.028.203.084a.29.29 0 01.077.203v2.156l-.105-.056a1.03 1.03 0 01.168-.336c.084-.112.184-.21.301-.294.121-.089.255-.159.4-.21.149-.051.303-.077.461-.077zm-.063.518c-.233 0-.44.058-.623.175a1.213 1.213 0 00-.42.483 1.606 1.606 0 00-.147.7c0 .261.05.497.147.707.103.21.243.376.42.497.182.121.39.182.623.182.233 0 .439-.06.616-.182.178-.121.318-.287.42-.497a1.59 1.59 0 00.154-.707c0-.261-.051-.495-.154-.7a1.214 1.214 0 00-.42-.483 1.095 1.095 0 00-.616-.175zm8.01-.462c.08 0 .145.028.196.084a.254.254 0 01.084.196v3.087c0 .08-.028.147-.084.203a.254.254 0 01-.196.084.262.262 0 01-.203-.084.29.29 0 01-.077-.203v-.665l.133-.014a.681.681 0 01-.105.336c-.07.121-.166.236-.287.343a1.646 1.646 0 01-.434.259 1.42 1.42 0 01-.532.098c-.317 0-.602-.082-.854-.245a1.808 1.808 0 01-.602-.679 2.117 2.117 0 01-.217-.973c0-.369.072-.693.217-.973.15-.285.35-.506.602-.665.252-.163.532-.245.84-.245.2 0 .387.033.56.098.173.065.322.154.448.266.13.112.231.236.301.371.075.135.112.27.112.406l-.182-.042v-.763c0-.08.026-.145.077-.196a.262.262 0 01.203-.084zm-1.442 3.206c.233 0 .439-.06.616-.182.182-.121.322-.285.42-.49a1.59 1.59 0 00.154-.707c0-.257-.051-.488-.154-.693a1.138 1.138 0 00-.42-.49 1.065 1.065 0 00-.616-.182c-.229 0-.434.058-.616.175a1.213 1.213 0 00-.42.483 1.56 1.56 0 00-.154.707c0 .261.049.497.147.707.103.205.243.369.42.49.182.121.39.182.623.182zm5.826.161c0 .08-.028.147-.084.203a.277.277 0 01-.203.084.254.254 0 01-.196-.084.29.29 0 01-.077-.203v-4.613a.276.276 0 01.28-.28c.084 0 .151.028.203.084a.266.266 0 01.077.196v4.613zm9.643-3.388c.317 0 .574.082.77.245.2.159.333.385.399.679h-.105l.049-.126a1.1 1.1 0 01.287-.378c.135-.121.291-.222.469-.301a1.34 1.34 0 01.553-.119c.308 0 .55.068.728.203.177.13.303.308.378.532.079.22.119.467.119.742v1.911c0 .08-.028.147-.084.203a.254.254 0 01-.196.084.262.262 0 01-.203-.084.29.29 0 01-.077-.203v-1.897c0-.182-.028-.345-.084-.49a.681.681 0 00-.26-.35c-.116-.089-.277-.133-.482-.133-.192 0-.367.044-.525.133a.977.977 0 00-.378.35.885.885 0 00-.14.49v1.897a.29.29 0 01-.077.203.262.262 0 01-.203.084.277.277 0 01-.203-.084.29.29 0 01-.077-.203V47.17c0-.177-.026-.336-.077-.476a.659.659 0 00-.245-.343c-.117-.089-.278-.133-.483-.133-.187 0-.357.044-.511.133a1.009 1.009 0 00-.371.343.839.839 0 00-.14.476v1.918c0 .08-.028.147-.084.203a.254.254 0 01-.196.084.277.277 0 01-.203-.084.29.29 0 01-.077-.203v-3.052a.277.277 0 01.28-.28c.084 0 .151.028.203.084a.265.265 0 01.077.196v.532l-.154.168a.98.98 0 01.14-.364 1.562 1.562 0 01.707-.581c.149-.06.308-.091.476-.091zm10.115.021c.08 0 .144.028.196.084a.254.254 0 01.084.196v3.087c0 .08-.028.147-.084.203a.254.254 0 01-.196.084.262.262 0 01-.203-.084.29.29 0 01-.077-.203v-.665l.133-.014a.681.681 0 01-.105.336c-.07.121-.166.236-.287.343a1.646 1.646 0 01-.434.259 1.42 1.42 0 01-.532.098c-.318 0-.602-.082-.854-.245a1.808 1.808 0 01-.602-.679 2.117 2.117 0 01-.217-.973c0-.369.072-.693.217-.973.15-.285.35-.506.602-.665.252-.163.532-.245.84-.245.2 0 .387.033.56.098.172.065.322.154.448.266.13.112.23.236.3.371.075.135.113.27.113.406l-.182-.042v-.763c0-.08.025-.145.077-.196a.262.262 0 01.203-.084zm-1.442 3.206c.233 0 .438-.06.616-.182.182-.121.322-.285.42-.49a1.59 1.59 0 00.154-.707c0-.257-.052-.488-.154-.693a1.138 1.138 0 00-.42-.49 1.065 1.065 0 00-.616-.182c-.229 0-.434.058-.616.175a1.213 1.213 0 00-.42.483 1.56 1.56 0 00-.154.707c0 .261.049.497.147.707.102.205.242.369.42.49.182.121.39.182.623.182zm5.49.448a.276.276 0 01-.203-.084.29.29 0 01-.077-.203v-3.052a.276.276 0 01.28-.28c.084 0 .151.028.203.084a.266.266 0 01.077.196v.924l-.084-.147a1.463 1.463 0 01.427-.791c.112-.112.24-.198.385-.259.144-.065.303-.098.476-.098.102 0 .196.026.28.077.088.047.133.114.133.203 0 .098-.026.17-.077.217a.253.253 0 01-.175.07.451.451 0 01-.175-.035.468.468 0 00-.21-.042.71.71 0 00-.35.098 1.1 1.1 0 00-.315.266c-.094.117-.17.25-.231.399a1.288 1.288 0 00-.084.469v1.701c0 .08-.028.147-.084.203a.254.254 0 01-.196.084zm5.315 0a.262.262 0 01-.203-.084.29.29 0 01-.077-.203v-4.613c0-.08.026-.145.077-.196a.262.262 0 01.203-.084c.08 0 .145.028.196.084a.254.254 0 01.084.196v4.613c0 .08-.028.147-.084.203a.254.254 0 01-.196.084zm2.324-3.64c.075 0 .138.03.19.091.055.056.083.114.083.175 0 .08-.037.15-.112.21l-2.268 1.981-.02-.651 1.931-1.722a.269.269 0 01.196-.084zm.077 3.633c-.08 0-.15-.03-.21-.091l-1.49-1.589.42-.385 1.476 1.582a.3.3 0 01.084.21.245.245 0 01-.098.203.32.32 0 01-.182.07zm5.057.077c-.373 0-.7-.08-.98-.238a1.732 1.732 0 01-.658-.651 1.972 1.972 0 01-.231-.966c0-.406.079-.751.238-1.036.163-.29.373-.509.63-.658.261-.154.537-.231.826-.231.215 0 .422.04.623.119a1.681 1.681 0 01.903.896c.093.21.142.446.147.707a.246.246 0 01-.084.189.28.28 0 01-.196.077h-2.765l-.126-.483h2.695l-.112.098v-.154a.886.886 0 00-.196-.49 1.065 1.065 0 00-.399-.322 1.107 1.107 0 00-.49-.112c-.14 0-.28.026-.42.077a.973.973 0 00-.371.238 1.252 1.252 0 00-.266.42c-.065.173-.098.38-.098.623 0 .27.054.509.161.714.112.205.266.369.462.49.196.117.425.175.686.175.163 0 .306-.021.427-.063.121-.042.226-.093.315-.154a1.6 1.6 0 00.224-.196.31.31 0 01.175-.063c.07 0 .126.023.168.07.047.047.07.103.07.168 0 .08-.037.15-.112.21a1.782 1.782 0 01-.532.385 1.632 1.632 0 01-.714.161zm4.65-3.668h1.645c.074 0 .135.026.182.077a.25.25 0 01.077.182.258.258 0 01-.077.189.248.248 0 01-.182.07h-1.645a.248.248 0 01-.182-.077.254.254 0 01-.077-.189c0-.07.025-.128.077-.175a.248.248 0 01.182-.077zm.735-.952c.079 0 .144.028.196.084a.267.267 0 01.077.196v3.381c0 .112.016.196.049.252a.274.274 0 00.126.119.505.505 0 00.161.028.305.305 0 00.119-.021.275.275 0 01.126-.028c.046 0 .088.023.126.07a.227.227 0 01.063.168c0 .084-.049.156-.147.217a.652.652 0 01-.329.084c-.066 0-.147-.005-.245-.014a.725.725 0 01-.28-.091.617.617 0 01-.238-.252c-.061-.121-.091-.29-.091-.504v-3.409c0-.08.028-.145.084-.196a.276.276 0 01.203-.084z"
        ></path>
      </svg>

        )

}else if(props.name == "google"){

  return(
    <svg xmlns="http://www.w3.org/2000/svg"   {...props} x="0px" y="0px" viewBox="0 0 48 48">
    <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
    </svg>
  );
}

 
}


// else if(){

//     return();
// }