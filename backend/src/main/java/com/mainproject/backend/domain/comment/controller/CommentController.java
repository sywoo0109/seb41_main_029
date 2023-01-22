//package com.mainproject.backend.domain.comment.controller;
//
//import com.mainproject.backend.domain.comment.dto.CommentDto;
//import com.mainproject.backend.domain.comment.dto.CommentResponseDto;
//import com.mainproject.backend.domain.comment.entity.Comment;
//import com.mainproject.backend.domain.comment.mapper.CommentMapper;
//import com.mainproject.backend.domain.comment.service.CommentService;
//import com.mainproject.backend.domain.users.entity.User;
//import com.mainproject.backend.domain.users.repository.UserRepository;
//import lombok.RequiredArgsConstructor;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.security.core.Authentication;
//import org.springframework.security.core.context.SecurityContextHolder;
//import org.springframework.web.bind.annotation.*;
//
//import javax.validation.Valid;
//import javax.validation.constraints.NotBlank;
//import javax.validation.constraints.Positive;
//
//@RestController
//@RequiredArgsConstructor
//@RequestMapping("/comments")
//public class CommentController {
//
////    private final CommentService commentService;
////    private final CommentMapper commentMapper;
////    private final UserRepository userRepository;
//
//
//
////    //답변 등록
////    @PostMapping("/{board-seq}")
////    public ResponseEntity postComment(@PathVariable("board-seq") @Positive long boardSeq,
////                                      @Valid @RequestBody CommentDto.CommentPostDto commentPostDto){
////        User user = getPrincipal();
////        long userSeq = user.getUserSeq();
////
////        Comment comment = commentService.createComment(commentMapper.commentPostDtoToComment(boardSeq, userSeq, commentPostDto), user );
////
////        return new ResponseEntity<>(commentMapper.commentToCommentResponseDto(comment), HttpStatus.CREATED);
////    }
//
//    //답변 수정
////    @PatchMapping("/{comment-id}")
////    public ResponseEntity patchComment(@PathVariable("comment-id") Long commentId,
////                                          @Valid @RequestBody CommentDto.CommentPatchDto commentPatchDto){
////
////        Comment comment = commentMapper.commentPatchDtoToComment(commentPatchDto);
////        comment = commentService.updateComment(comment);
////
//////        Comment comment = commentService.updateComment(commentMapper.commentPatchDtoToComment(commentPatchDto));
////        return new ResponseEntity<>(commentMapper.commentToCommentResponseDto(comment), HttpStatus.OK);
////    }
//
//    //답변조회
////    @GetMapping("/{comment-id}")
////    public ResponseEntity getComment(@PathVariable("comment-id")long commentId){
////
////        return new ResponseEntity<>(HttpStatus.OK);
////    }
//
//    //답변 삭제
//    @DeleteMapping("/{comment-id}")
//    public ResponseEntity deleteComment(@PathVariable("comment-id") long commentId){
//
//        commentService.deleteComment(commentId);
//
//        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
//    }
//    //인증
//    private User getPrincipal() {
//        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
//        User user = userRepository.findByUserId(authentication.getName());
//        return user;
//
//        //답변 좋아요
////    public ResponseEntity likeComment()
//    }
//}
