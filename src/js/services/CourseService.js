import {acceptOkJsonResponse} from "./responseResults";
import api from "../api";
/**
 * Course-type definition
 * @typedef {{id: Number, title: String, cost: Number, lecturerId: Number,
 *            description: String, startDate: Date, places: Number
 *            imgUrl: String, isClosed: Boolean, isEnded: Boolean}} Course
 */
class CourseService {
  url = "course"
  historyUrl = "course/history"
  topics = "topics"

  async loadCourses(page) {
    return acceptOkJsonResponse(api.get(`${this.url}/page/${page}`));
  }

  async createCourses(course) {
    return acceptOkJsonResponse(api.post(this.url, course));
  }

  /**
   * @param id
   * @return {Promise<Course|*[]|{status: *}>}
   */
  async getById(id) {
    const course = await acceptOkJsonResponse(api.get(`${this.url}/${id}`));
    if (course) {
      course.startDate = new Date(course.startDate);
    }
    return course;
  }

  // TODO: response
  async enrollToCourse(courseId) {
    return await acceptOkJsonResponse(api.post(`${this.url}/enroll/${courseId}`));
  }

  async unenrollFromCourse(courseId) {
    return await acceptOkJsonResponse(api.delete(`${this.url}/enroll/${courseId}`));
  }

  async checkEnrolled(courseId) {
    return await acceptOkJsonResponse(api.get(`${this.url}/enroll/${courseId}`));
  }

  async ownedCourses(page) {
    return await acceptOkJsonResponse(api.get(`${this.historyUrl}/owned/${page}`));
  }
  
  async enrolledCourses(page) {
    return await acceptOkJsonResponse(api.get(`${this.historyUrl}/enrolled/${page}`));
  }

  async suggestTopicName(name) {
    return await acceptOkJsonResponse(api.get(`${this.topics}/suggest/${name}`));
  }

  async loadNotApprovedTopics(page) {
    return await acceptOkJsonResponse(api.get(`${this.topics}/new/${page}`));
  }

  async loadApprovedTopics(page) {
    return await acceptOkJsonResponse(api.get(`${this.topics}/approved/${page}`));
  }

  async loadSkippedTopics(page) {
    return await acceptOkJsonResponse(api.get(`${this.topics}/skipped/${page}`));
  }

  async createTopic(topic) {
    return await acceptOkJsonResponse(api.post(this.topics, topic));
  }

  async updateTopic(topic) {
    return await acceptOkJsonResponse(api.put(this.topics, topic));
  }

  async deleteTopic(id) {
    if (id) {
      return await acceptOkJsonResponse(api.delete(`${this.topics}/${id}`));
    }
  }
}

export default new CourseService();