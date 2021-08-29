import { Component, OnDestroy, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { UserProfileService } from 'src/app/services/user-profile.service';
import { emptyContent } from 'src/app/shared/emptyContentValidator';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit,OnDestroy {
  modalRef: BsModalRef
  imgUrl: any
  postImage: any
  postForm: FormGroup
  postLoading: boolean = false
  subscriptions:any[]=[]
  constructor(public userProfilesService:UserProfileService,
    public modalService: BsModalService,
    private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  openModal(template: TemplateRef<any>) {
    this.imgUrl = null
    this.postImage = null
    this.modalRef = this.modalService.show(template);
    this.postForm = this.fb.group({
      content: [``, [Validators.required, emptyContent]]
    })
  }
  scrollTop() { window.scroll(0, 0) }
  makeApost(value: any) {

    this.postLoading = true
    let postFormData = new FormData
    postFormData.append('content', value.content)
    if (this.postImage) {
      postFormData.append('image', this.postImage)
    }
    this.subscriptions.push(
      this.userProfilesService.makeApost(postFormData).subscribe(
        res => {
          this.postImage = ''
          this.modalRef.hide()
          this.postLoading = false
          this.getPostsAfterEdit()
          this.getPhotosAfterAddPost()
        }, err => {
          this.postImage = ''
          this.modalRef.hide()
          this.postLoading = false
        }
      )
    )
  }
  getPostsAfterEdit() {
    this.subscriptions.push(
      this.userProfilesService.getMyProfile().subscribe(
        (res:any) => {
          this.userProfilesService.userPosts = res?.posts
        },
        err => {
        }

      )
    )
  }
  getPhotosAfterAddPost() {
    this.subscriptions.push(
      this.userProfilesService.getMyPhotos().subscribe(
        (res: any) => {
          this.userProfilesService.skeltonLoadingForPhotos = false
          this.userProfilesService.photos = res
        },
        err => { }
      )
    )
  }

    // start clear the input file if user click cancel
    deletePostImg(input: any) {
      input.value = ''
      this.imgUrl = null
      this.postImage = null
    }
    // end clear the input file if user click cancel
      // start make img appear once user chose it
  selectPostImg(event: any) {
    this.postImage = event.target.files[0]

    let reader = new FileReader();
    reader.onload = () => {
      this.imgUrl = reader.result;
    };

    if (event.target.files[0]) {
      reader.readAsDataURL(this.postImage);
    } else {
      this.imgUrl = null
      this.postImage = null
    }
  }
  // end make img appear once user chose it
  ngOnDestroy() {
    this.subscriptions.forEach(sub => {
      sub.unsubscribe()
    })
  }
}
