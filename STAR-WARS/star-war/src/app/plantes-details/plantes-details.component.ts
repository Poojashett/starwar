import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plantes-details',
  templateUrl: './plantes-details.component.html',
  styleUrls: ['./plantes-details.component.css'],
})
export class PlantesDetailsComponent implements OnInit {
  planets: any;
  id: any;
  src: Array<string> = [];
  srcArray = [
    'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUWFRgVFRUZGBgaGhoaGhoaHBwaHRwaHhweHBwYGhgcIS4lHh4rHxoaJjgmKy8xNTU1HCQ7QDs0Py40NTEBDAwMEA8QGhIRGjQhJCE0NDQ0NDQ0NDQxNDQ0NDU0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIALABHgMBIgACEQEDEQH/xAAbAAADAQEBAQEAAAAAAAAAAAAAAQIDBAUGB//EADwQAAEDAQYEBQMDAQgBBQAAAAEAAhEhAzFBUWHwBBJxgQWRobHB0eHxBiIyQgcTFCNSYpLCghYkU1Ry/8QAGAEBAQEBAQAAAAAAAAAAAAAAAAECAwT/xAAgEQEBAAIDAQACAwAAAAAAAAAAAQIRAxIhMTJBBBNx/9oADAMBAAIRAxEAPwD8qa4ZVr0Ii6I641lIj4wUhUY+NzctoYce4J3PZUb8vTWO3wo8h5eoRzZ7KB8w3vS9Mv7x1qFJOIz0jz7pB1+G6Y9K9UD59LxFa9YOFyHu36Ab1Uz2unTt2SFZrvugoEV74fCAdxcoaPmv3Tw3u5BQfvutGvGWszeMsrll2uvN81vupeBjXrAbM5uNOuimxqCh5p+fL1SD9dalQSqNWtz1VAXjZymsLEU77CfPnXe93gzvNKa+ex8ID/n8pd9/hAjEKSrJpnigNGvTPTz0QZOKmFZ3CSBd0BAOHTzH2JSQWx2k7xO7lIN8+lKxAUpg5IGDpvZv6I6qVRbnTqDXQUKBGME53vugO+l2yl9dlBbLsSKXfKWI3TL3QDlv64KnkRjMmZuuHeZ5p7aoIBVWkTS6BeRM43XjmmNOkoFRr06fdINpf0ncIGT5edFJGO5xuTaYuMUIxxvHQj3UzHdBq90mtaAZUAAAHQAKd6dETfW67fRKdPiNUBOArKoUGu6qRdMpOQVBoYv+MN5qb/ZBPt8U+Eq5fhASmwKSfhUAoHymvmtWWckDFVZsLhQXLosJa8HKFLfPG8Z767rXwG1awWhYQ04xSmq8e0YRhp9fdfoPG/rXn4NvD8rQGxWKkBfAcTaAmY7/AGXPjuV+t8kknjMk0BN12lU2lZhVPmuzirfRHRMGohMkd0Ej533vQ05bqnAUuFUDJVPcTBdN0DKlICgBOczTeCBRGAKTuu+qoty3hfj+UoQQd/hI7+isjdN3KRGKCEEKiKqQgbT79E3HCbpjKt8DCUhoUwdTG6lBMHfZG9iFWG95pEb9kAI6evRUPp2UmMvuiUFE7zQTfEdPLe5UhDTnsYoAKi3dPlDTQjffeaABj7BBWOQNJInL1+uqZNL/ADrJ6Y3enRT29fVBdqgG6RvVT85e0J07+iOYikxIrGIma5iQO4GSCCI33nVLm3vsqJ3dVDdJUAHb+VbIyWcLRkTRB9n+h+BsLS2a22dytxP3VfrjgbCytS2wcCAb9eq+W4fjHNIgo4ri3PqT1XLre23fvOumD3HqsHEpu7qS5dXESqBUSm1EatThKVTAqHB6ZKQK3qpTYct0r5SUEPBv3l8IabjeMvihmO6szchjDdvdUEJhq25AvT4fwHibQfs4a2fq2yeRHUNhJEteKW5pOavpP/SHHf8A07fsxy4+K8D4izk2vD2zBWrrN4F1KkAROvncr6bjxuXLd/bNSfm9dQswbiPNYuYpYrIxrh9/VU5v17HXyqpi5IBBQ613WfNOB/USBBNBNcKGKTS+lb7ixEGpGmdRQ1pSc8BqjmkVvzmlxmREkk8tZpBvmgZsqkab+iQGF3suiysXPB5WzAJMVMAAnsBlmpErHHCvdMNnfoiMBGOWOM5JtHt5C65VTpkYQIx+FJNPXD0T8ju9BQiaevyIU4X76ofrfiZ9Oo7pk+V1KTv6IA5Za645VSApMUmM94og5H5TDiDluEC5YMHpfhoVHkqP23RJr7qXYevwgRnt3TBwUuFfL2TjCMYUFsd9Eg65SDRI/hA3dvykChxlCAOaYSJTHVBYKtpWZhUFRo0q2NUsZgvqv0d+kbXjnw08tkw/vtCJAx5WD+pxyuEycAUS143hfhtrbvFlY2brR5/paLh/qcbmjUkBfp/6f/snaAH8ZaSf/jsjA6OtCJP/AIgdSvuPC/C+H4Kz/u7BgYP6nGrnH/U517j6DCE3cc55/YARmfhamNvxi5TemnhngXCcMP8AIsLOz/3coLj1e6XHuVvb8Y7+lwK4uIe6OaYnPrWm7l4fEeICDOZu9MMV0x45+6ZXL9PcHjBkj+UZA+4StPGQMeXQg43QQvEbx3Kw/wALpFJ+KHBeG/iA518OE98cr6LpMcN/HPrya+vo/EuB4LiQf8RYWTjdztBa8dXthw84XwXj/wDZ62C7g7XnFf8ALtHCejHgDydHVe0+3/bMzGq4/wDGEGQT17ZrX9eFYuXJi/NfEbK0a9wtWua+f3AtDTP/AOQAPKi4XM3cv1DxVtlxDA21EkD9rrnNzg/FxXwPivhrrF0Oq0/xeLiOmBzC8/JxXH37Hbj5Jl5fK81rwAZrpFKiCZkQRSL1mQre1RC5Op77wtNAdMvZQGiDfNI1z6YeqDmqGY+6txBqABddddUmaySJyFYpdm0qg34yNek9fLVATvDOEctKE4dLtDfMpAYzliPQYotJBqDUA5UIkHoQgCK0jZ9UT2+Up2Rfu5U06lBO79wnHb2jfwibiE3xOeA+KZoA0GIB9ccq5qCMd/RVRHbex7oJ5d13SnopWnKb/p1r6KAcM/ZAE3eWPqp772UyhQAO/wAoRGiCUAiEFCBha2YWQXTZN03lGKQfQfpD9OP423bYs/awQ60f/os8TX+o3AZ6Ar95sLCy4ezbYWTQyzYKAepJvJJkkmpK8b9I+DjgOEa1wi1tIfakXhxFGzk0U68xxWPilq6OeTBMjU032Xfj49+344ZZ+6j6ANbaCXXHAkTGfL9YKOFY1pMuDyP3Q0YmkAAknFfNcNxls5rSCGGamGj9sQTDqEwMcV12Y5SW8rQwGXBhd/J0fzLgIbSOVoqQMFcvPNunHjv1r4r4wJLXAhmsTqCvEfbh1WTplOURAXn+K8Wx3NHMAZ5Q7MUJBEmMMV4n+KtMXEC/ATWgWO2vj0XGSevflgM8pDh/uoHTWWRIPfzuU8Uxj5eZsnGYa8OHNIoWk0I7iF5dv4qDykD9wMwKyIx7YQt7Pj7S1bQUEktloIBoP5GJmY1S5UmOP6YPtXNo5p5hfMUjdy3tGMtGDkcA+v7SQDOgx+y4+JeOUGhpUzIBFIIzwqV5v9/GJ88cIlWZ2OeeO/HXaWoA5XCDecwMzvJebxNo17Sx13zmDgUcTxvN/IDmGI+d4rzbS0XTv5p57h7t5HE2XK4g1yOeqwpURWkaLv4kyK3rhcd7C82U1XWVIBwphspSmN77IP22EaAz3+KeiBvHqnHt8oaEDae+lfhIbCYA3l0KqOlw19rigz5r02u2DE5juEjIxwwI6QVTukQUCCOaMfL53mgOKYp87w/CBHrT7JevloiUyPVAorU91J9E0IJKEzcpKBtvQhyJ1z+nsoEEFNCC2DTYvX2f9mvhIt+Os+YSyyBtnA3ftjlB/wDMs8ivjmYb3cv1f+ySzDLHiLY3veyyHRjeY+r2+S3hju6jOeXWbr7zxPibya9ctwvDd4uxtXQ4RcPQZZ3JeNceRMG676da1XzHiFo5zQ2IivaKEnzXquscdOPFvK7erxPjLGwTM80w32hdnDeNNtIYSwGP2zzCkyAeUiI73r4fiTW4nP6RkvY4I2QAc9zQ4NiC4OOn7GkG7GQBNV57fXtm9aT+orFjZLOdtJDXE0qQTcKUMR5r5u04ougE3CAJoF63iXHPe0gnmZhyuMNBggBtwE5X6r5xzqrHlpdxsbU3yd6rWx40/wAXGi4nvCza9No9q14sESXFxurExkNlcrrSayuLnhBtU2lW5wlc9raBQ+0XLbWibc7CtbRc96ze9OwdVZ2aaOlJUdNNPnPYR5KqkOQFThnfsoHwfX8oEBsb6J34pgia3Y4GMQL/AG7JgoMiZVOdSvn5jHcBSD17UzRv7IG9hBIIgjDFEX9M9z074Jb+apg7xQA6b37IBw3OyghEIETv8pKw0Y+n46qKxv2y+6ASITjdyXVAkBDPTfkgUneigQThBG/hBQb2d19ZujCL+b4X6r+i7Xk4Bv8Aufau783L7MC/J7Mr9E/T/Ef+xYBe19oPN3N/2C7/AMf8nD+R+Lv43iHc/KagmYz0nJeXxPFAuJBvOc46dlHF8TMiTNIOWN+G7l53MZnHfmt8t3WuDyNnGRJJqYp6nojhy2ocb+9BWQFyWz46yVym0qV53p7SPV4rimhnK3mpeTF2z6rxbR8roefRcbjB0UMq06pOtFm99FiXozt0ufRc77RQ+1XLaWiJto+1XM98qXPULOw5V2V6zW3DuhwMA9QCPI0Qb5b0+qbgQSK0PshrcJzzw+qACOlJC0gA3CbIvIwNZIgkQDTIkHWITi+JAreZpgJgSbuuQSCBctSPr54KnzpWM8ovSMUpF2uUqm9EZc431yruivmMRJiZjDmi+OhiVE/O/fzRHnvco0bbrzF929hIN6np0TAk3jvTvkMEmnfdBQ6qZ39lUHLeyhzcNPLc+qMo1SVvmmnTOcLqnHNI+SNF0Q45fO80JFATpvoigQKfefRIhQIlMlEIOf3ogthX1X6a4v8Aynsm5/N/yAH/AFXyTSvR8K4nkfGDhH0K3x5dcpWM8e2Onu8Rayb8I8vwuU257LK0esXPW87upj42tnYpWJGK532lFH96ubrtvxDxNCsf7wXFYutFk96zsaPcsXWiwfaLNzk2LfaLMlJCgEIQgFrw4qsl0cOEn1K6mYLS0sS0wb+udywi9bsPtunVdJpmoLN/ZL7LU79/NTCaCDYN8XXyK9k7NmPv2+yGu6zf9PlB0nrieveVByO9oy+DvRI7AzSbl9b1RBFCBnuN1UA3Kfa7Gvxqcqjh0n0x+hQJ0v8Ap6IDzESYkmJpJioGdBJ6I0SpzyTJkmgkyaQAB2FOlEsj6et2SJ3A60yQJp1Sn7V8grE+npf2qpOW5QIeXf4SuTBRhv3QS07oi+g6dVXVT+EAfNAGHx5oHWEMJFRTpQ1peNJUCCtp38qXb++8EpQekziJE44qDariFoUi8q9k06XWqzdarAuUkqbVo60WbnJSkoolCEIBCEIBCSFBTGyV1huVRuPRZ2bIC0bvfmtSJW7WfVaMG9FDIj92VKdBXt8Ls4Xhy4jl/dU4GO9DguuM2zWAB3epByG71229lyHldQi/TQitVi+zqNc7u+iZY6SVg5hMQDOQ6aXoND2FRX17HyWlnaFvtFRMggiRBi+mMrJ4kkyLzp7rKuIDPd2KPonhSN3+seSR1WWgdKX7pf8AZDuqc3bx3RL2ndSgAd77p009UNGGeemUXmKY3olAHe+yDG80t7392Tv5ogmE0o3ckfx9fRAIp0y+8XoSQNrCaYwfSp9vQqZ132ThBKgRPZIhUW/CQQHN2QUdN0+6UIJKSsCcQNfxVTyqKlNCEAkhCAQhU1iggLazanyxTtuPhAWpEaAq2u3CyCsJB0Nu8ltw73NJIcW0Nxi+kU1XM27yW9hZ8xAkCSBJ+YW4ldQtOaS44DOuUQMO1KKyyRGNDOYy3kotGlhIJgjEXGpBgjA3LZ1BXl0Axph6+S6f6w4Teb9dNVTRnliSFBZXKsDIY9h91QdFQ4jCkhc2nABu+4GajotoIHMwuEUPLIguBgThMEaqLNxEgEVBxif6owyFL5AA1nmIF1DT/jnnePRZVnO9FU09AJ7pRGP31T+o6oh2jycANAAJiakZ1IUg90xFPXKPPrKb2FpLSIcJkGhBBuIRoppf90kE3JwRFIxFPX0PkUC6D8pAbjfqiN76+qbzOGc61mTrWOw1JBNIynt7qSFRGqIx9/ZBJOe9UJFW9sGmucZSCcNVBMpGN5z7LaWkGRBApGLuaZdOEEikXN1nKEC6pJ9EpQUB1wwnQ13em10TQGQRUTE4jI6pCEEb7IJKOVMJDVAcqXIqhIIGFTXZAUzE+YMj0xUjewmBsoBMDr1+qbSR3BGB0PupB30qgpu7/TeCtqgDd8dcFYaqNGbu+VsxYRF+5+Fozcqxl1h03+dYrcIwVtGY9JuppXr6Lna6lFsy0ntlvT1W5UW6zAr5C+lVBOTi3p00jqupjwb6HSpOQgpOaOY8oIFafyxzorpNv//Z',
    'https://i.ytimg.com/vi/20Hzs3LZRaI/maxresdefault.jpg',
    'http://www.starwarsreport.com/wp-content/uploads/2012/01/Star.Wars_.The_.Clone_.Wars_.S04E13.HDTV_.XviD-ASAP_screenshot_1.jpg',
    'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0d8192bf-dd90-4689-82c8-ed2605681368/d2o2w2k-4cf038e9-32ab-46ab-a877-a7346fc16333.jpg/v1/fill/w_1024,h_640,q_75,strp/kuat_drive_yards_by_jpledoux_d2o2w2k-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjQwIiwicGF0aCI6IlwvZlwvMGQ4MTkyYmYtZGQ5MC00Njg5LTgyYzgtZWQyNjA1NjgxMzY4XC9kMm8ydzJrLTRjZjAzOGU5LTMyYWItNDZhYi1hODc3LWE3MzQ2ZmMxNjMzMy5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.Lf8U7rDskcHc5EH-co0YM7xhtGEAXlgObSGK2fWbu4A',
    'https://pm1.narvii.com/6218/1c3dc7145222874a49cadf0272424a12fc7f0e4e_hq.jpg',
    'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0d8192bf-dd90-4689-82c8-ed2605681368/d2o2w2k-4cf038e9-32ab-46ab-a877-a7346fc16333.jpg/v1/fill/w_1024,h_640,q_75,strp/kuat_drive_yards_by_jpledoux_d2o2w2k-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjQwIiwicGF0aCI6IlwvZlwvMGQ4MTkyYmYtZGQ5MC00Njg5LTgyYzgtZWQyNjA1NjgxMzY4XC9kMm8ydzJrLTRjZjAzOGU5LTMyYWItNDZhYi1hODc3LWE3MzQ2ZmMxNjMzMy5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.Lf8U7rDskcHc5EH-co0YM7xhtGEAXlgObSGK2fWbu4A',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGZ7t6xZAyyxRu_0dM0Ma7-sg7cIlxWj0XMIjZVpjwXy-MY8YY1-dfrur8TOIdPLF48Dw&usqp=CAU',
    'https://static.wikia.nocookie.net/a2f6eb9a-43af-402a-9e44-e9cd675cbaba',
    'https://s3.ap-southeast-1.amazonaws.com/images.asianage.com/images/aa-Cover-9md54413dd1q29mb107abadlo3-20170413173333.Medi.jpeg',
    'https://cdnb.artstation.com/p/assets/images/images/017/543/133/large/daniel-vogel-mf2-planet1.jpg?1556411306',
  ];
  constructor() {}

  ngOnInit(): void {
    this.planets = JSON.parse(localStorage.getItem('planets') as any);
    this.id = JSON.parse(localStorage.getItem('characterId') as any);
    this.src.push(this.srcArray[this.id]);
  }
}
