import Title from "../components/Title";
import { EffectFade, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import Separator from "../components/Separator";

const videos = [
  {
    id: 1,
    url: "https://instagram.flim15-1.fna.fbcdn.net/o1/v/t16/f1/m82/734143EEEEA64B2670869E9CAFDF0E84_video_dashinit.mp4?efg=eyJxZV9ncm91cHMiOiJbXCJpZ193ZWJfZGVsaXZlcnlfdnRzX290ZlwiXSIsInZlbmNvZGVfdGFnIjoidnRzX3ZvZF91cmxnZW4uNzIwLmNsaXBzLmJhc2VsaW5lIn0&_nc_ht=instagram.flim15-1.fna.fbcdn.net&_nc_cat=105&vs=462914289281409_720010756&_nc_vs=HBksFQIYT2lnX3hwdl9yZWVsc19wZXJtYW5lbnRfcHJvZC83MzQxNDNFRUVFQTY0QjI2NzA4NjlFOUNBRkRGMEU4NF92aWRlb19kYXNoaW5pdC5tcDQVAALIAQAVABgkR0FlNmpnSzEwcUhmM18wQ0FIOXpnVURrYTlGT2JwUjFBQUFGFQICyAEAKAAYABsAFQAAJsjHjeP5z4RAFQIoAkMzLBdAH1T987ZFohgSZGFzaF9iYXNlbGluZV8xX3YxEQB1%2FgcA&_nc_rid=a915a19a24&ccb=9-4&oh=00_AfBvP5ZAKU1o9bM64ynXpXSNaIK9nmQ4ubCTWEdgJJvsDA&oe=6381D1E1&_nc_sid=022a36"
  },
  {
    id: 2,
    url: "https://instagram.flim15-1.fna.fbcdn.net/o1/v/t16/f1/m82/7B41678C60B378B98920D1C012AF37A3_video_dashinit.mp4?efg=eyJxZV9ncm91cHMiOiJbXCJpZ193ZWJfZGVsaXZlcnlfdnRzX290ZlwiXSIsInZlbmNvZGVfdGFnIjoidnRzX3ZvZF91cmxnZW4uNzIwLmNsaXBzLmJhc2VsaW5lIn0&_nc_ht=instagram.flim15-1.fna.fbcdn.net&_nc_cat=103&vs=1048878679846085_2077116943&_nc_vs=HBksFQIYT2lnX3hwdl9yZWVsc19wZXJtYW5lbnRfcHJvZC83QjQxNjc4QzYwQjM3OEI5ODkyMEQxQzAxMkFGMzdBM192aWRlb19kYXNoaW5pdC5tcDQVAALIAQAVABgkR0trbXNBS1NXTVZCV0pNQUFBMEpVaF9YTl9RY2JwUjFBQUFGFQICyAEAKAAYABsAFQAAJuj4%2Bo7q%2B%2B8%2FFQIoAkMzLBdAGxBiTdLxqhgSZGFzaF9iYXNlbGluZV8xX3YxEQB1%2FgcA&_nc_rid=b9cfd5c040&ccb=9-4&oh=00_AfD17q2sX_vg54tIXps5H_0GPrctJOl6BS0kHWQ9Ma5uMQ&oe=6381DDBF&_nc_sid=022a36"
  },
  {
    id: 3,
    url: "https://instagram.flim15-1.fna.fbcdn.net/o1/v/t16/f1/m82/D04073A9D3AACF5B5A6DF0B0F4A3EC83_video_dashinit.mp4?efg=eyJxZV9ncm91cHMiOiJbXCJpZ193ZWJfZGVsaXZlcnlfdnRzX290ZlwiXSIsInZlbmNvZGVfdGFnIjoidnRzX3ZvZF91cmxnZW4uNzIwLmNsaXBzLmJhc2VsaW5lIn0&_nc_ht=instagram.flim15-1.fna.fbcdn.net&_nc_cat=100&vs=375067044806471_2007685622&_nc_vs=HBksFQIYT2lnX3hwdl9yZWVsc19wZXJtYW5lbnRfcHJvZC9EMDQwNzNBOUQzQUFDRjVCNUE2REYwQjBGNEEzRUM4M192aWRlb19kYXNoaW5pdC5tcDQVAALIAQAVABgkR054Z3RRSi1sOUJqSzBRREFPRDNjOVQwUUVwSmJwUjFBQUFGFQICyAEAKAAYABsAFQAAJtbb7tvfl%2BQ%2FFQIoAkMzLBdAQMzMzMzMzRgSZGFzaF9iYXNlbGluZV8xX3YxEQB1%2FgcA&_nc_rid=9e5692f721&ccb=9-4&oh=00_AfDxSh2hfwnCbl3z0kFjKhNjQ1BW39GmfF4Y-YUOYS3E1g&oe=6381DA16&_nc_sid=022a36"
  },
  {
    id: 4,
    url: "https://instagram.flim15-1.fna.fbcdn.net/o1/v/t16/f1/m82/744528431EB13E8FA7DCB28B3564F4BE_video_dashinit.mp4?efg=eyJxZV9ncm91cHMiOiJbXCJpZ193ZWJfZGVsaXZlcnlfdnRzX290ZlwiXSIsInZlbmNvZGVfdGFnIjoidnRzX3ZvZF91cmxnZW4uNzIwLmNsaXBzLmJhc2VsaW5lIn0&_nc_ht=instagram.flim15-1.fna.fbcdn.net&_nc_cat=107&vs=455078683224478_1937628796&_nc_vs=HBksFQIYT2lnX3hwdl9yZWVsc19wZXJtYW5lbnRfcHJvZC83NDQ1Mjg0MzFFQjEzRThGQTdEQ0IyOEIzNTY0RjRCRV92aWRlb19kYXNoaW5pdC5tcDQVAALIAQAVABgkR05JTDJCTHI1YlFMMDhrQkFKdTYtNWdnRUlFSmJwUjFBQUFGFQICyAEAKAAYABsAFQAAJvqt7OH8puJAFQIoAkMzLBdAJBDlYEGJNxgSZGFzaF9iYXNlbGluZV8xX3YxEQB1%2FgcA&_nc_rid=161cc47bba&ccb=9-4&oh=00_AfC2s3bVS0D9F1qDkwm1wuRYt4H2fWxE6hNWwi0tPLRxqg&oe=63822D64&_nc_sid=022a36"
  },
]

export default function instagram() {
  return (
    <div className="page instagramPage">
      <div className="contain">
        <Title />
        <div className="content">
          <p>¿Ya conocieron a Amelia? Amelia es una chica tímida y apasionada por los libros. Ella vuela y salta entre cada uno que comienza y termina.<br/>Amelia tiene una cuenta de Instagram secreta en la que comparte sus opiniones sobre todos los libros que lee. Es un espacio seguro entre ella y los espectadores que desean saber su veredicto.</p>
          <Separator/>
          <div className="carruselVideoBx">
            <Swiper
              modules={[Navigation,EffectFade]}
              navigation
              // effect='fade'
              speed={300}
              slidesPerView={1}
              loop
              scrollbar={{ draggable: true }}
              className="carruselVideo"
            >
              {
                videos.map((vid)=>(
                  <>
                    <SwiperSlide key={vid.id}>
                      <div className="videoBx">
                        <div className="bx">
                          <video controls>
                            <source src={vid.url}/>
                          </video>
                        </div>
                      </div>
                    </SwiperSlide>
                  </>
                ))
              }
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  )
}